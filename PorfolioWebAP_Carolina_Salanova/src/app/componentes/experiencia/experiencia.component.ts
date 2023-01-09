import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { ExperienciaModelo } from 'src/app/modelos/experienciaModelo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
   //isLogged = false;
   experiencias:ExperienciaModelo[]=[];
   modoEdit:any;
   

  constructor(private experienciaService:ExperienciaService) { } //Inyecta el servicio para tener acceso en la clase a los metodos.

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
  }
