import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProyectosModelo } from '../modelos/proyectosModelo';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  url = 'http://localhost:8080/proyectos'
  constructor(private httpClient:HttpClient) { }

  public mostrarListaProyectos():Observable<ProyectosModelo[]>{
    return this.httpClient.get<ProyectosModelo[]>(this.url +'/ver/proyectos');
  }

  public buscarProyecto(id:number):Observable<ProyectosModelo[]>{
    return this.httpClient.get<ProyectosModelo[]>(this.url +'/buscar/proyecto/${id}');
  }

  public crearProyecto(Proyectos:ProyectosModelo):Observable<any>{
    return this.httpClient.post<any>(this.url +'/new/proyecto', Proyectos);
  }
  
  public editarProyecto(id:number, Proyectos:ProyectosModelo):Observable<any>{
    return this.httpClient.put<any>(this.url + '/proyecto/editar/${id}', Proyectos);
  }

  public deleteProyecto(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + '/delete/proyecto/${id}');
  }
}
