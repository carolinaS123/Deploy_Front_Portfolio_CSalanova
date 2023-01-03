import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EducacionModelo } from 'src/app/modelos/educacionModelo';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
//educa: Educacion = null;
//educacion!:Educacion;
   //album:any=[]; 
   //educacion!:Educacion; 
  //educacion:any=[];
  educacion:EducacionModelo[]=[];
  institucion!:string;
  titulacion!:string;
  inicio_edu!:string;
  fin_edu!:string;
  descripcion_edu!:string;
  
  constructor(
    private educacionService: EducacionService, 
    private activatedRouter : ActivatedRoute,
    private router: Router,
    private formBuilder:FormBuilder
    ) { 


    }

    cargarEducacion():void{
      this.educacionService. mostrarListaEducacion().subscribe(data=>{this.educacion=data});
    } 

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.buscarEducacion(id).subscribe(
      data =>{this.educacion = data;
      }/*, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }*/
    )
  }
  /* 
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.editarEducacion(id, this.educacion).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la educacion");
        this.router.navigate(['']);
      }
    )
  }*/
}
