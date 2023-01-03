import { Component, OnInit } from '@angular/core';
import { EducacionModelo } from 'src/app/modelos/educacionModelo';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  //isLogged = false;
  educaciones:EducacionModelo[]=[];
  modoEdit:any;

  constructor(private educacionService:EducacionService) { }

  ngOnInit(): void {
    this.cargarEducacion();

    if(sessionStorage.getItem('CurrentUser') == "null"){
        this.modoEdit = false;
    }else if(sessionStorage.getItem('currentUser') == null){
       this.modoEdit=false;
    }else{
       this.modoEdit=true;
    }
  };
  
  cargarEducacion():void{
    this.educacionService. mostrarListaEducacion().subscribe(data=>{this.educaciones=data});
  }


}

