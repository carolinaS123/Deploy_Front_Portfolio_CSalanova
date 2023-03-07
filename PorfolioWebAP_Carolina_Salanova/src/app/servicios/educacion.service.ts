import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EducacionModelo } from '../modelos/educacionModelo';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  //url = 'http://localhost:8080/educaciones/'
  url = 'https://portfoliocsalanova.onrender.com/educaciones/'

  constructor(private httpClient: HttpClient) { }
  
  public mostrarListaEducacion():Observable<EducacionModelo[]>{
    return this.httpClient.get<EducacionModelo[]>(this.url +'mostrar');//Lista
  }

  public crearEducacion(EducacionModelo: EducacionModelo):Observable<any>{
    return this.httpClient.post<any>(this.url +'crear', EducacionModelo);
  }
  
  public editarEducacion(id: number, EducacionModelo:EducacionModelo):Observable<any>{
    return this.httpClient.put<any>(this.url + `editar/${id}`, EducacionModelo);
  }

  public borrarEducacion(id: number) :Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }

  public buscarEducacion(id:number):Observable<EducacionModelo>{
    return this.httpClient.get<EducacionModelo>(this.url +`buscar/${id}`);
  }

}
