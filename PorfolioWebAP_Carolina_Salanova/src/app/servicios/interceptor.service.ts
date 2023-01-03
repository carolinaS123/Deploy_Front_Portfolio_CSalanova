import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service'

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private authenticationServicio:AuthenticationService) { }
  
  intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
    
    var currentUser=this.authenticationServicio.UsuarioAutenticado;
    if(currentUser && currentUser.id){
      req.clone({
        setHeaders:{
          Authorization: `Bearer ${currentUser.id}`
        }
      })
    }
    //console.log("Interceptor está corriendo" + JSON.stringify(currentUser));
    return next.handle(req);
  }
}
