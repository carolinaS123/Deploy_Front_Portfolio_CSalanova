import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/servicios/proyectos.service'; 
import { ProyectosModelo } from 'src/app/modelos/proyectosModelo'; 
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  //isLogged = false;
  proyectos:ProyectosModelo[]=[];
  modoEdit:any;

  constructor(private proyectosService:ProyectosService, private router:Router) { }

  ngOnInit(): void {
    this.cargarProyecto();
   
    if(sessionStorage.getItem('CurrentUser') == "null"){
      this.modoEdit = false;
    }else if(sessionStorage.getItem('currentUser') == null){
      this.modoEdit=false;
    }else{
      this.modoEdit=true;
    }
  }

  cargarProyecto():void{
     this.proyectosService.mostrarListaProyectos().subscribe(data =>{this.proyectos=data});
  }
  
  borrarProyecto(id:number){
    if(id != undefined){
      this.proyectosService.borrarProyecto(id).subscribe(
        {
          next: data =>{ 
          alert("Se pudo borrar el proyecto");
          this.cargarProyecto(); 
          }
          ,
          error: err =>{
          alert("Se pudo borrar el proyecto");
          this.cargarProyecto(); 
          }
       }
      )
    }
  }
}
