import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelos/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-banner',
  templateUrl: './edit-banner.component.html',
  styleUrls: ['./edit-banner.component.css']
})
export class EditBannerComponent implements OnInit {
  bannerModelo: Persona = null;

  constructor(private persoServ: PersonaService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.persoServ.buscarPersona(id).subscribe(
      {
        next: data => {
          this.bannerModelo = data;
        }
        , 
        error: err => {
          alert("Error al editar el estudio");
          this.router.navigate(['']);
        }
      }  
    )
  }

  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    if(this.bannerModelo != undefined){
     this.persoServ.editarPersona(id, this.bannerModelo).subscribe(
       {
         next: data => {
          alert("El banner se editó correctamente");
           this.router.navigate(['']);
         }
         , 
         error: err => {
           alert("Error al editar el banner");
           this.router.navigate(['']);
         }
       } 
      ) 
    }
  }

}
