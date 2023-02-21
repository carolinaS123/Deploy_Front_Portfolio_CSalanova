import { Component, OnInit } from '@angular/core';
import { ExperienciaModelo } from 'src/app/modelos/experienciaModelo';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  expeModelo: ExperienciaModelo=null;

  constructor(private expeServ: ExperienciaService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.expeServ.buscarExperiencia(id).subscribe(
      {
        next: data => {
          this.expeModelo = data;
        }
        , 
        error: err => {
          alert("Error al editar la experiencia");
          this.router.navigate(['']);
        }
      }  
    )
  }

  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    if(this.expeModelo != undefined){
     this.expeServ.editarExperiencia(id, this.expeModelo).subscribe(
       {
         next: data => {
          alert("La experiencia se editó correctamente");
           this.router.navigate(['']);
         }
         , 
         error: err => {
           alert("Error al editar la experiencia");
           this.router.navigate(['']);
         }
       } 
      ) 
    }
  }

}
