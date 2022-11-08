import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';//es una libreria para programacion reactiva, es para recibir respuesta de forma asincrona
import { HttpClient } from '@angular/common/http';//Para poder hacer peticiones

@Injectable({
  providedIn: 'root'
})
export class DatosPorfolioService {

  constructor(private http:HttpClient) { }

  getDataPorfolio ():Observable<any> {
   return this.http.get('./assets/json/datos.json/');//Mi json se llama datos.json
  }
}
