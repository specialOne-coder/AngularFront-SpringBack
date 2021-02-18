import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { from, Observable } from 'rxjs';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl  = "http://localhost:9000/myApi/employees";
  private OtherBaseUrl  = "http://localhost:9000/myApi/employee";
  
  constructor(private http:HttpClient) { }

  getUsers(): Observable<User[]>{
     return this.http.get<User[]>(`${this.baseUrl}`);
  }

  get(id:number):Observable<any>{
     return this.http.get(`${this.OtherBaseUrl}/${id}`);
  }

  createUser(data:any):Observable<any>{
     return this.http.post(this.OtherBaseUrl,data);
  }

  update(id:number,data:any):Observable<any>{
    return this.http.put(`${this.OtherBaseUrl}/${id}`,data);
  }

  delete(id:number):Observable<any>{
    return this.http.delete(`${this.OtherBaseUrl}/${id}`)
  }

}

