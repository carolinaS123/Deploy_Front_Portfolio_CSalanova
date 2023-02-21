import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EducacionModelo } from 'src/app/modelos/educacionModelo';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  eduModelo: EducacionModelo = null;

  
  constructor(private eduServ: EducacionService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.eduServ.buscarEducacion(id).subscribe(
      {
        next: data => {
          this.eduModelo = data;
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
    if(this.eduModelo != undefined){
     this.eduServ.editarEducacion(id, this.eduModelo).subscribe(
       {
         next: data => {
          alert("El estudio se editó correctamente");
           this.router.navigate(['']);
         }
         , 
         error: err => {
           alert("Error al editar el estudio");
           this.router.navigate(['']);
         }
       } 
      ) 
    }
  }
}
