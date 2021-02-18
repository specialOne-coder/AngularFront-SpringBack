import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:User[] = [];
  constructor(private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
    this.lesusers()
  }

  lesusers(){
    this.userservice.getUsers().
      subscribe((data:User[]) =>{
        console.log(data)
        this.users = data;
      })
  }

  addUser(form:any){
    this.userservice.createUser(form.value)
      .subscribe(
         response => {
           console.log(response);
           alert('Ajout réussi');
           this.lesusers();
           this.router.navigate(['']);
         },
         error => {
           console.log(error);
         }
      )
    form.reset();
  }



}
