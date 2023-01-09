import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProyectosModelo } from '../modelos/proyectosModelo';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  url = 'http://localhost:8080/proyectos/'
  constructor(private httpClient:HttpClient) { }

  public mostrarListaProyectos():Observable<ProyectosModelo[]>{
    return this.httpClient.get<ProyectosModelo[]>(this.url +'mostrar');
  }

  public crearProyecto(ProyectosModelo:ProyectosModelo):Observable<any>{
    return this.httpClient.post<any>(this.url +'crear', ProyectosModelo);
  }
  
  public editarProyecto(id:number, ProyectosModelo:ProyectosModelo):Observable<any>{
    return this.httpClient.put<any>(this.url +  `editar/${id}`, ProyectosModelo);
  }

  public borrarProyecto(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }

  public buscarProyecto(id:number):Observable<ProyectosModelo[]>{
    return this.httpClient.get<ProyectosModelo[]>(this.url +`buscar/${id}`);
  }
}
