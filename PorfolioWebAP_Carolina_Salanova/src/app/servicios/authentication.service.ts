import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 // url='http://localhost:8080/personas/authentication/login/';
  url='https://portfoliocsalanova.onrender.com/personas/authentication/login/';

  currentUserSubject:BehaviorSubject<any>;
 
  constructor(private http:HttpClient) {
     console.log("El servicio de autenticación esta corriendo");
     this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
   }

  Login(credenciales:any):Observable<any>{
    var httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }


    return this.http.post<any>(this.url, credenciales, httpOptions).pipe(map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    }));
  }

  get UsuarioAutenticado(){
    return this.currentUserSubject.value;
  }
  

}
