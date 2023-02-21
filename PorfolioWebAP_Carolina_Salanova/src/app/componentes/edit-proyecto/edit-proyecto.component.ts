import { Component, OnInit } from '@angular/core';
import { ProyectosModelo } from 'src/app/modelos/proyectosModelo';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectosService } from 'src/app/servicios/proyectos.service'; 

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proyecModelo: ProyectosModelo = null;

  constructor(private proyecServ: ProyectosService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyecServ.buscarProyecto(id).subscribe(
      {
        next: data => {
          this.proyecModelo = data;
        }
        , 
        error: err => {
          alert("Error al editar el proyecto");
          this.router.navigate(['']);
        }
      }  
    )
  }
  
  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    if(this.proyecModelo != undefined){
     this.proyecServ.editarProyecto(id, this.proyecModelo).subscribe(
       {
         next: data => {
          alert("El proyecto se editó correctamente");
           this.router.navigate(['']);
         }
         , 
         error: err => {
           alert("Error al editar el proyecto");
           this.router.navigate(['']);
         }
       } 
      ) 
    }
  }
}
