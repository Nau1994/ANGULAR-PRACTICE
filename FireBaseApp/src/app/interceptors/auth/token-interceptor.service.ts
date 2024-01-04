import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap, take } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../auth/user.model';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private authService:AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log('TokenInterceptorService',req.url)
    // return next.handle(req)

    return this.authService.userSub.pipe(take(1),
    switchMap(user=>{
      if(user?.token && req.url.includes("https://fir-post-app-9497d-default-rtdb.firebaseio.com/")){
        let modifiedReq=req.clone({
          params:req.params.append('auth',user.token)
        })
        return next.handle(modifiedReq)
      }
      return next.handle(req)
    })
    )
    
    
  }
}
