import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let modifiedReq=req.clone({
      // params:req.params.append('Test-Param','test-param'),
      // headers:req.headers.append('Test-Header','test-header')
    })
    return next.handle(modifiedReq).pipe(
      tap(event=>{
        if(event.type===HttpEventType.Response){
          console.log(event)
        }
      })
    )
  }
}
