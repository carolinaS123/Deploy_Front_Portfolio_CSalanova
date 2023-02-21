import { Component, OnInit } from '@angular/core';
//import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { Persona } from 'src/app/modelos/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: Persona = new Persona("", "", "", "", "", "", "", "", "");
  //persona: Persona[]=[]; 
  modoEdit:any;
  
  constructor(public personaService: PersonaService) { }
  
  
  ngOnInit(): void {                                         
    this.cargarPersona();
  
    if(sessionStorage.getItem('CurrentUser') == "null"){
        this.modoEdit = false;
    }else if(sessionStorage.getItem('currentUser') == null){
       this.modoEdit=false;
    }else{
       this.modoEdit=true;
    }
  }

  cargarPersona():void{
    this.personaService. mostrarPersona().subscribe(data=>{this.persona=data});
  }

}
