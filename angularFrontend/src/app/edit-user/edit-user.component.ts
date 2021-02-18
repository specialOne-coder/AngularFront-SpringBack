import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent implements OnInit {

  currentUser: User = new User;
  message = '';
  
  constructor(
    private userService:UserService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getUser(this.route.snapshot.paramMap.get('id'));
  }

  getUser(id:any):void{
    this.userService.get(id)
      .subscribe(
        data => {
          this.currentUser = data;
          console.log(data)
        },
        error => {
          console.log(error);
        });
  }

  updateUser():void{
    this.userService.update(this.currentUser.id,this.currentUser).
         subscribe(
           Response => {
             console.log(Response);
             this.message = 'Mise à jour réussie';
             alert(this.message);
             this.router.navigate(['']);
           },
           error => {
              console.log(error);
              this.message = 'Erreur';
              alert(this.message);
           }
         )
  }

  deleteUser():void{
    this.userService.delete(this.currentUser.id)
        .subscribe(
          Response => {
            console.log(Response);
            this.message = 'Suppression réussie';
            alert(this.message);
            this.router.navigate(['']);
          },
          error => {
            console.log(console.error);
          }
        );
  }
        
        
 

}
