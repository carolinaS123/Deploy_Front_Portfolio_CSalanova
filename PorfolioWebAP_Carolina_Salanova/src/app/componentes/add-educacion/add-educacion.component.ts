import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducacionModelo } from 'src/app/modelos/educacionModelo';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-educacion',
  templateUrl: './add-educacion.component.html',
  styleUrls: ['./add-educacion.component.css']
})
export class AddEducacionComponent implements OnInit {
  institucion : String;
  titulacion : String;
  inicio_edu : String;
  fin_edu : String;
  descripcion_edu : String;

  constructor(private educacionService:EducacionService, private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }
  onCreate(): void{
    const estudio = new EducacionModelo(this.institucion, 
    this.titulacion, this.inicio_edu, this.fin_edu, this.descripcion_edu);
    this.educacionService.crearEducacion(estudio).subscribe(
      {
        next: data => {
        alert("El estudio fue creado correctamente");
         this.router.navigate([''])
       }
       , 
       error: err =>{
       alert("El estudio fue creado correctamente");
          this.router.navigate([''])
       }
      }
    )
  }

}
