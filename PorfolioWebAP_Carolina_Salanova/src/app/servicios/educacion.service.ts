import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EducacionModelo } from '../modelos/educacionModelo';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  url = 'http://localhost:8080/educaciones/'
  constructor(private httpClient: HttpClient) { }
  
  public mostrarListaEducacion():Observable<EducacionModelo[]>{
    return this.httpClient.get<EducacionModelo[]>(this.url +'mostrar');//Lista
  }

  public crearEducacion(educacion: EducacionModelo):Observable<any>{
    return this.httpClient.post<any>(this.url +'crear', EducacionModelo);//save or create, add or new
  }
  
  public editarEducacion(id: number, educacion:EducacionModelo):Observable<any>{
    return this.httpClient.put<any>(this.url + `editar/${id}`, EducacionModelo);//edit or update
  }

  public borrarEducacion({ id }: { id: number; }) :Observable<any>{
    return this.httpClient.delete<any>(this.url + `/borrar/${id}`);//Delete
  }

  public buscarEducacion(id:number):Observable<EducacionModelo[]>{
    return this.httpClient.get<EducacionModelo[]>(this.url +`/buscar/${id}`);//Detail
  }

}
