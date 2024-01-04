
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivateChild{

  constructor(private userAuth:UserAuthService) { }

  canActivateChild(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    console.log(state.root)
    const id=state.root.children[0].paramMap.get('id')
    if(this.userAuth.isAdminLoggedIn(Number(id))){
      return true
    }else{
      window.alert("Permission denied for this tab")
      return false;
    }
  }
}
