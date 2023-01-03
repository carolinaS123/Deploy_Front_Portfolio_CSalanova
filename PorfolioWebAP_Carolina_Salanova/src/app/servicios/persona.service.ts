import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../modelos/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url = 'http://localhost:8080/personas'
  constructor(private httpCliente: HttpClient) { }

  /*public mostrarListaPersona():Observable<Persona[]>{
    return this.httpCliente.get<Persona[]>(this.URL +'/ver/personas');
  }
*/
  public getPersona(): Observable<Persona>{
    return this.httpCliente.get<Persona>(this.url+'/traer/persona')
  }
/*
  public buscarPersona(id:number):Observable<Persona[]>{
    return this.httpCliente.get<Persona[]>(this.url + `/buscar/persona/${id}`);
  }

  public crearPersona(Persona: Persona):Observable<any>{
    return this.httpCliente.post<any>(this.url +'/new/persona', Persona);
  }
  
  public editarPersona(id:number, Persona:Persona):Observable<any>{
    return this.httpCliente.put<any>(this.url + `/persona/editar/${id}`, Persona);
  }

  public deletePersona(id:number):Observable<any>{
    return this.httpCliente.delete<any>(this.url + `/delete/persona/${id}`);
  }
  */
}
