import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service'

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private authenticationServicio:AuthenticationService, private rutas:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let currentUser=this.authenticationServicio.UsuarioAutenticado;
      if(currentUser && currentUser.id){
        return true;
      }else{
        this.rutas.navigate(['/login']);
        return true;
      }
  }
  
}
