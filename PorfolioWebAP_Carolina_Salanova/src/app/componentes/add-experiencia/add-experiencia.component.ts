import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExperienciaModelo } from 'src/app/modelos/experienciaModelo'; 
import { ExperienciaService } from 'src/app/servicios/experiencia.service'; 

@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css']
})
export class AddExperienciaComponent implements OnInit {
  empresa: String;
  puesto: String;
  inicio_exp: String;
  fin_exp:String;
  descripcion_exp:String;

  constructor(private expeServ:ExperienciaService, private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new ExperienciaModelo(this.empresa, 
    this.puesto, this.inicio_exp, this.fin_exp, this.descripcion_exp);
    this.expeServ.crearExperiencia(expe).subscribe(
      {
        next: data => {
        alert("La experiencia fue creada correctamente");
         this.router.navigate([''])
       }
       , 
       error: err =>{
       alert("La experiencia fue creada correctamente");
          this.router.navigate([''])
       }
      }
    )
  }

}
