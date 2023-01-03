import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducacionModelo } from 'src/app/modelos/educacionModelo';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-add-educacion',
  templateUrl: './add-educacion.component.html',
  styleUrls: ['./add-educacion.component.css']
})
export class AddEducacionComponent implements OnInit {
  instiAdd:string='';
  titulAdd: string='';
  inicioEduAdd: string='';
  finEduAdd: string='';
  descripcionEduAdd:string='';

  constructor(private educacionService:EducacionService, private router:Router) { }

  ngOnInit(): void {
  }
  
  onCreate(): void{
    const educacion = new EducacionModelo(this.instiAdd, this.titulAdd, this.inicioEduAdd, this.finEduAdd, this.descripcionEduAdd);
      this.educacionService.crearEducacion(educacion).subscribe(
      data=>{
      alert("Educación fue agregada correctamente");
      this.router.navigate(['']);
      }, err =>{
        alert("Hubo una falla");
        this.router.navigate(['']);
      }
    )
  }
}
