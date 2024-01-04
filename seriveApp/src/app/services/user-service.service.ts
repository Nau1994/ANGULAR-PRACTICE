import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError} from 'rxjs';
import {map,catchError} from 'rxjs/operators'
import { ajax} from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }
  getUser(){
    const url="https://jsonplaceholder.typicode.com/users"
    // return this.http.get(url)
    // .pipe(
    //   map(data=>data),
    //   catchError(error=>throwError(()=>new Error("error while get request")))
    //   )
    
    return ajax.getJSON(url).pipe(
      map(data=>data),
      catchError(error=>throwError(()=>new Error("error while get request")))
      )
  }
}
