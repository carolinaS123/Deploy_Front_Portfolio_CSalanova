import { Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  //Variables de instancia
  url_banner:string="";

  constructor(private datosPorfolioService: DatosPorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolioService.getDataPorfolio().subscribe(datos =>{
      console.log(datos);
      this.url_banner=datos.url_banner;
    });
  }

}
