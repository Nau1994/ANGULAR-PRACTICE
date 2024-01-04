import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { User } from '../../auth/user.model';
import { Router } from '@angular/router';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userSub=new BehaviorSubject<User|null>(null);
  clearTimeout: any;
  constructor(private http:HttpClient ,private router:Router) { }

  userLogin(email:string,password:string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[]',{
      email,
      password,
      returnSecureToken:true
    }).pipe(
      catchError(this.getErrorHandler),
      tap(this.handleUser.bind(this))
    )
  }

  logout(){
    localStorage.removeItem('userData')
    this.userSub.next(null);
    this.router.navigate(["/"])
  }

  userSignUp(email:string,password:string){
    
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[]',{
      email,
      password,
      returnSecureToken:true
    }).pipe(
      catchError(this.getErrorHandler),
      // tap(this.handleUser.bind(this))
    )
  }

  private getErrorHandler(errorResp:HttpErrorResponse){
    let errorMessage='An Error Occurred';
    if(!errorResp.error || !errorResp.error.error){
      throwError(errorResp)
    }

    switch(errorResp.error.error.message){
      case 'EMAIL_EXISTS':
        errorMessage = 'Email Already Exists';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Email Not Found';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Invalid Password';
        break;
      case 'INVALID_LOGIN_CREDENTIALS':
        errorMessage = 'Invalid Email/Password';
        break;
    }

    
    return throwError(errorMessage)
  }

  private handleUser(response:AuthResponseData){
    const expireDate=new Date(
      new Date().getTime()+ +response.expiresIn*1000
    )

    const user=new User(
      response.email,
      response.localId,
      response.idToken,
      expireDate
    )

    this.userSub.next(user);
    localStorage.setItem('userData',JSON.stringify(user))

    let date = new Date().getTime();
    let expirationDate = new Date(expireDate).getTime();

    this.autoLogout(expirationDate - date);
  }

  autoLogin() {
    let userData=localStorage.getItem('userData')
    

    if (userData && JSON.parse(userData)._token) {
      let loggedUser=JSON.parse(userData)
      let user = new User(
        loggedUser.email,
        loggedUser.localId,
        loggedUser._token,
        new Date(loggedUser.expirationDate)
      );
      this.userSub.next(user);

      let date = new Date().getTime();
      let expirationDate = new Date(JSON.parse(userData).expirationDate).getTime();

      this.autoLogout(expirationDate - date);

      return true
    }

    return false
    
  }

  autoLogout(expirationDate: number) {
    console.log(expirationDate);
    this.clearTimeout = setTimeout(() => {
      this.logout();
      alert('Session out!')
    }, expirationDate);
  }
}
