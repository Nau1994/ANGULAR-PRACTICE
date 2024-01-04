import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  isUserLoggedIn(id:number){
    if(id<=7) return true;
    return false;
  }

  isAdminLoggedIn(id:number){
    if(id<=3) return true;
    return false;
  }
}
