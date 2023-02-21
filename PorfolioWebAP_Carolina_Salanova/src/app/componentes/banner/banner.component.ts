import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelos/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  //Variables de instancia
  bannerPerso: Persona = new Persona("", "", "", "", "", "", "", "", "");
  //persona: Persona[]=[]; 
  modoEdit:any;
  url_banner:any="";


  constructor(private personaService: PersonaService) { }
  /*
  ngOnInit(): void {                                         
    this.cargarBanner();
  
    if(sessionStorage.getItem('CurrentUser') == "null"){
        this.modoEdit = false;
    }else if(sessionStorage.getItem('currentUser') == null){
       this.modoEdit=false;
    }else{
       this.modoEdit=true;
    }
  }
  
  cargarBanner():void{
    this.personaService. mostrarPersona().subscribe(data=>{this.persona=data});
  }*/

  
  ngOnInit(): void {
    this.cargarBanner();
  
    if(sessionStorage.getItem('CurrentUser') == "null"){
        this.modoEdit = false;
    }else if(sessionStorage.getItem('currentUser') == null){
       this.modoEdit=false;
    }else{
       this.modoEdit=true;
    }

    /*
    this.porfolioService.getDataPorfolio().subscribe(data =>{
      console.log("Imagen del banner"+(data));
      this.url_banner=datos.url_banner;
    });
    */
  }
  cargarBanner():void{
      this.personaService.mostrarPersona().subscribe(data =>{this.bannerPerso=data});
    }
}
