import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';//Esto es para hacer reactivos los formularios en Angular
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/servicios/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:any=FormGroup;

  constructor(private formBuilder: FormBuilder, private authenticationServicio:AuthenticationService, private ruta:Router) {
    ///Creamos el grupo de controles para el formulario de login
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]]
      })
  }


  ngOnInit(): void {
  }

  get Email() {
    return this.form.get("email");
  }

  get EmailValid() {
    return this.Email?.touched && !this.Email?.valid
  }

  get Password() {
    return this.form.get("password");
  }

  get PasswordValid() {
    return this.Password?.touched && !this.Password?.valid;
  }
  onEnviar(event:Event){
    event.preventDefault;
    this.authenticationServicio.Login(this.form.value).subscribe(data=>{console.log("DATA:" + JSON.stringify(data));
      this.ruta.navigate(['/porfolio']);
    })
  }

}
