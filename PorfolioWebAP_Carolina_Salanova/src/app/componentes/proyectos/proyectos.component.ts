import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/servicios/proyectos.service'; 
import { ProyectosModelo } from 'src/app/modelos/proyectosModelo'; 

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  //isLogged = false;
  listaProyectos:any=[];
  modoEdit:any;

  constructor(private proyectosService:ProyectosService) { }

  ngOnInit(): void {
   this.proyectosService.mostrarListaProyectos().subscribe(data =>{this.listaProyectos=data;
   
    if(sessionStorage.getItem('CurrentUser') == "null"){
      this.modoEdit = false;
    }else if(sessionStorage.getItem('currentUser') == null){
      this.modoEdit=false;
    }else{
      this.modoEdit=true;
    }
  });
    
  }

}
