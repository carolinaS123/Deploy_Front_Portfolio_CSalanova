import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/modelos/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
  persona:Persona=null;

  constructor(private persoServ:PersonaService, private activatedRoute:ActivatedRoute ,private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.persoServ.buscarPersona(id).subscribe(
      {
        next: data => {
          this.persona = data;
        }
        , 
        error: err => {
          alert("Error al editar acerca de");
          this.router.navigate(['']);
        }
      }  
    )
  }

  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    if(this.persona != undefined){
     this.persoServ.editarPersona(id,this.persona).subscribe(
       {
         next: data => {
          alert("Acerca de mi se editó correctamente");
           this.router.navigate(['']);
         }
         , 
         error: err => {
           alert("Error al editar acerca de mi");
           this.router.navigate(['']);
         }
       } 
      ) 
    }
  }

}
