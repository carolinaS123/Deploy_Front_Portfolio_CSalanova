import { Component, OnInit } from '@angular/core';
//import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { Persona } from 'src/app/modelos/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
//Variables de instancia
  persona: Persona = new Persona("", "", "", "", "", "", "", "", "");
  modoEdit:any;
  
  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {                                         //Definir info a mostrar
    this.personaService.getPersona().subscribe(data =>{this.persona=data;});
  
    if(sessionStorage.getItem('CurrentUser') == "null"){
        this.modoEdit = false;
    }else if(sessionStorage.getItem('currentUser') == null){
       this.modoEdit=false;
    }else{
       this.modoEdit=true;
    }
  }

}
