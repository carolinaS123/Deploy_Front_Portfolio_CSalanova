import { Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
   //Se inicializa el array no las variables de instancias
   experiencias:any=[];

  constructor(private datosPorfolioService: DatosPorfolioService) { } //Inyecta el servicio para tener acceso en la clase a los metodos.

  ngOnInit(): void {
    this.datosPorfolioService.getDataPorfolio().subscribe(datos =>{
      //Definir info a mostrar
      this.experiencias=datos.experiencias;
    });
  }


}
