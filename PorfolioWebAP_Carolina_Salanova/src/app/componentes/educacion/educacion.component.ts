import { Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  //Se inicializa el array no las variables de instancias
  educaciones:any=[];

  constructor(private datosPorfolioService: DatosPorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolioService.getDataPorfolio().subscribe(datos => {
      //Definir info a mostrar
      this.educaciones = datos.educaciones;
    });
  }

}
