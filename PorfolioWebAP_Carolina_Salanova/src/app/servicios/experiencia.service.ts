import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienciaModelo } from '../modelos/experienciaModelo';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url = 'http://localhost:8080/experiencias/'
  constructor(private httpClient:HttpClient) { }

 public mostrarListaExperiencia():Observable<ExperienciaModelo[]>{
    return this.httpClient.get<ExperienciaModelo[]>(this.url +'mostrar');
  }

  public crearExperiencia(ExperienciaModelo: ExperienciaModelo):Observable<any>{
    return this.httpClient.post<any>(this.url +'crear', ExperienciaModelo);
  }
  
  public editarExperiencia(id: number, experienciaModelo:ExperienciaModelo):Observable<any>{
    return this.httpClient.put<any>(this.url + `editar/${id}`, experienciaModelo);
  }

  public borrarExperiencia(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }

  public buscarExperiencia(id:number):Observable<ExperienciaModelo>{
    return this.httpClient.get<ExperienciaModelo>(this.url +`buscar/${id}`);
  }

}
