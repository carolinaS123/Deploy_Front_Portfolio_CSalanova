import { Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos:any=[];

  constructor(private datosPorfolioService: DatosPorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolioService.getDataPorfolio().subscribe(datos =>{
      //Definir info a mostrar
      this.proyectos=datos.proyectos;
    });
  }

}
