import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../modelos/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //url = 'http://localhost:8080/personas/'
  url = 'https://portfoliocsalanova.onrender.com/personas/'


  constructor(private httpCliente: HttpClient) { }

  public mostrarPersona(): Observable<Persona>{
    return this.httpCliente.get<Persona>(this.url+'traer')
  }

  public crearPersona(persona: Persona):Observable<any>{
    return this.httpCliente.post<any>(this.url +'crear', persona);
  }
  
  public editarPersona(id:number, persona:Persona):Observable<any>{
    return this.httpCliente.put<any>(this.url + `editar/${id}`, persona);
  }

  public borrarPersona(id:number):Observable<any>{
    return this.httpCliente.delete<any>(this.url + `borrar/${id}`);
  }

  public buscarPersona(id:number):Observable<Persona>{
    return this.httpCliente.get<Persona>(this.url + `buscar/${id}`);
  }
  
}
