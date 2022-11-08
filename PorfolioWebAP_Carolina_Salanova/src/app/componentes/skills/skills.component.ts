import { Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  //Se inicializa el array no las variables de instancias
  skills:any=[];

  constructor(private datosPorfolioService: DatosPorfolioService) { } //Inyecta el servicio para tener acceso en la clase a los metodos.

  ngOnInit(): void {
    this.datosPorfolioService.getDataPorfolio().subscribe(datos =>{
      
      //Definir info a mostrar
      this.skills=datos.skills;
    });
  }

}
