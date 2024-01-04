import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, take, tap } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class postsGuard  implements CanActivate{
  constructor(private authService:AuthService,private router:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // let isAllowed=false
    return this.authService.userSub.pipe(take(1),map(user=>{
        if(user?.token){
          return true
        }else return this.router.createUrlTree(['/login'])
      }
    )
    ,
    // tap(auth=>{
    //   if(!auth){
    //     this.router.navigate(['/login'])
    //   }
    // })
    )
  }
  
};
