import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private userAuth:UserAuthService) { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    if(this.userAuth.isUserLoggedIn(Number(route.paramMap.get('id')))){
      return true
    }else{
      window.alert("Permission denied for this page")
      return false;
    }
  }
}