import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map,catchError,throwError} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users").pipe(
      map(data=>data),
      catchError(error=>throwError(()=>new Error("error while get request")))
    )
  }

  getUser(id:number){
    return this.http.get("https://jsonplaceholder.typicode.com/users/"+id).pipe(
      map(data=>data),
      catchError(error=>throwError(()=>new Error("error while get request")))
    )
  }
}
