import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../modelos/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url = 'http://localhost:8080/experiencias'
  constructor(private httpClient:HttpClient) { }

 public mostrarListaExperiencia():Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.url +'/ver/experiencias');
  }

  public buscarExperiencia(id:number):Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.url +`/buscar/experiencia/${id}`);
  }

  public crearExperiencia(experiencia: Experiencia):Observable<any>{
    return this.httpClient.post<any>(this.url +'/new/experiencia', Experiencia);
  }
  
  public editarExperiencia(experiencia:Experiencia):Observable<any>{
    return this.httpClient.put<any>(this.url + '/experiencia/editar/', Experiencia);
  }

  public deleteExperiencia(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `/delete/experiencia/${id}`);
  }
  
}
