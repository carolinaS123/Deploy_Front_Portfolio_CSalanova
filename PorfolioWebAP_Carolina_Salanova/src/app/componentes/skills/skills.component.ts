import { Component, OnInit } from '@angular/core';
import { SkillsModelo } from 'src/app/modelos/skillsModelo';
import { SkillsService } from 'src/app/servicios/skills.service';
import { ActivatedRoute, Router } from '@angular/router';
//import {Observable} from 'rxjs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  //Se inicializa el array no las variables de instancias
  skills: SkillsModelo[]=[]; //aca se llama al modelo q es un array
  modoEdit:any;

  constructor(private skillsService:SkillsService, private router: Router) { } //Inyecta el servicio para tener acceso en la clase a los metodos.

  ngOnInit(): void {
    this.cargarSkills();
    
    if(sessionStorage.getItem('CurrentUser') == "null"){
      this.modoEdit = false;
    }else if(sessionStorage.getItem('currentUser') == null){
      this.modoEdit=false;
    }else{
      this.modoEdit=true;
    }
  }

  cargarSkills():void{
    this.skillsService.mostrarListaSkills().subscribe((data)=>{
       this.skills=data;});
  }

  borrarSkill(id:number){
    if(id != undefined){
      this.skillsService.borrarSkill(id).subscribe(
        {
          next: data =>{ 
          alert("Se pudo borrar el skill");
          this.cargarSkills(); 
          }
          ,
          error: err =>{
          alert("Se pudo borrar el skill");
          this.cargarSkills(); 
          }
       }
      )
    }
  }

}
