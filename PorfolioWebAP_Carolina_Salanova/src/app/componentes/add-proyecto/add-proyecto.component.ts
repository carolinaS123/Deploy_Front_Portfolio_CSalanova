import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { ProyectosModelo } from 'src/app/modelos/proyectosModelo';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent implements OnInit {
  nombre_proy : String;
  descripcion_proy : String;
  inicio_proy : String;
  fin_proy : String;
  imagen_proy : String;
  link_proy : String;

  constructor(private proyectoServ:ProyectosService, private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyec = new ProyectosModelo(this.nombre_proy, 
    this.descripcion_proy, this.inicio_proy, this.fin_proy, this.imagen_proy, this.link_proy);
    this.proyectoServ.crearProyecto(proyec).subscribe(
      {
        next: data => {
        alert("El proyecto fue creado correctamente");
         this.router.navigate([''])
       }
       , 
       error: err =>{
       alert("El proyecto fue creado correctamente");
          this.router.navigate([''])
       }
      }
    )
  }

}
