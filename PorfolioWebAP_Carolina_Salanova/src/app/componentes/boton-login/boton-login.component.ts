import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton-login',
  templateUrl: './boton-login.component.html',
  styleUrls: ['./boton-login.component.css']
})
export class BotonLoginComponent implements OnInit {
  modoEdit:any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('CurrentUser') == "null"){
      this.modoEdit = false;
    }else if(sessionStorage.getItem('currentUser') == null){
      this.modoEdit=false;
    }else{
      this.modoEdit=true;
    }
  }
  login():void{
    this.router.navigate(['/login'])
  }
}
