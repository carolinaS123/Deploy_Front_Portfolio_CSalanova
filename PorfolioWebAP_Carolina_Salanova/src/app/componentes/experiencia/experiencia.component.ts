import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { ExperienciaModelo } from 'src/app/modelos/experienciaModelo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
   experiencias:ExperienciaModelo[]=[]; 
   modoEdit:any;
   

  constructor(private experienciaService:ExperienciaService, private router:Router) { } 

  ngOnInit(): void {
      this.cargarExperiencia();

      if(sessionStorage.getItem('CurrentUser') == "null"){
          this.modoEdit = false;
      }else if(sessionStorage.getItem('currentUser') == null){
          this.modoEdit=false;
      }else{
         this.modoEdit=true;
      }
    }
   
    cargarExperiencia():void{
      this.experienciaService.mostrarListaExperiencia().subscribe(data => {this.experiencias=data});
      }

      borrarExpe(id:number){
        if(id != undefined){
          this.experienciaService.borrarExperiencia(id).subscribe(
            {
              next: data =>{ 
              alert("Se pudo borrar la experiencia");
              this.cargarExperiencia(); 
              }
              ,
              error: err =>{
              alert("Se pudo borrar la experiencia");
              this.cargarExperiencia(); 
              }
           }
          )
        }
      }
  }
