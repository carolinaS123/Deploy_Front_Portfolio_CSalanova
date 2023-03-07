import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';//es una libreria para programacion reactiva, es para recibir respuesta de forma asincrona
import { HttpClient } from '@angular/common/http';//Para poder hacer peticiones

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
 // url:String='http://localhost8080/mostrar/personas'
  url:String='https://portfoliocsalanova.onrender.com/mostrar/personas'

  constructor(private http:HttpClient) { }

  getDataPorfolio ():Observable<any> {
   return this.http.get<any>(this.url+'persona');//Mi json se llama datos.json
  }
}
