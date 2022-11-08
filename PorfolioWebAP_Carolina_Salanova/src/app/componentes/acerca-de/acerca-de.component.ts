import { Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
//Variables de instancia
  nombre:string="";
  apellido:string="";
  titulo:string="";
  acerca_de:string="";
  url_foto:string="";

  constructor(private datosPorfolioService: DatosPorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolioService.getDataPorfolio().subscribe(datos =>{
      console.log(datos);
      //Definir info a mostrar
      this.nombre=datos.nombre;
      this.apellido=datos.apellido;
      this.titulo=datos.titulo;
      this.acerca_de=datos.acerca_de;
      this.url_foto=datos.url_foto;
    });
  }

}
