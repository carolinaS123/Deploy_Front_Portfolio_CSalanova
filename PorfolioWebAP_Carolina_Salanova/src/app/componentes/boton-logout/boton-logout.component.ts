import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton-logout',
  templateUrl: './boton-logout.component.html',
  styleUrls: ['./boton-logout.component.css']
})
export class BotonLogoutComponent implements OnInit {
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
  logout():void{
    window.sessionStorage.clear();
    this.router.navigate(['']);
  }

}
