import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SkillsModelo } from '../modelos/skillsModelo';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  url = 'http://localhost:8080/skills/'
  
  constructor(private httpClient:HttpClient) { }

  public mostrarListaSkills():Observable<SkillsModelo[]>{
    return this.httpClient.get<SkillsModelo[]>(this.url +'mostrar');
  }

  public crearSkill(skillsModelo: SkillsModelo):Observable<any>{
    return this.httpClient.post<any>(this.url +'crear', skillsModelo);
  }

  public editarSkill(id:number, skillsModelo:SkillsModelo):Observable<any>{
    return this.httpClient.put<any>(this.url + `editar/${id}`, skillsModelo);
  }

  public borrarSkill(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }
  
  public buscarSkill(id:number):Observable<SkillsModelo>{
    return this.httpClient.get<SkillsModelo>(this.url +`buscar/${id}`);
  }
  
}
