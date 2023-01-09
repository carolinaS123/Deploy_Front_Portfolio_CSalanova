import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS  } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ErrorComponent } from './componentes/error/error.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { BotonLoginComponent } from './componentes/boton-login/boton-login.component';
import { BotonLogoutComponent } from './componentes/boton-logout/boton-logout.component';
import { BtnAddExperienciaComponent } from './componentes/btn-add-experiencia/btn-add-experiencia.component';
import { BtnAddEducacionComponent } from './componentes/btn-add-educacion/btn-add-educacion.component';
import { BtnAddSkillComponent } from './componentes/btn-add-skill/btn-add-skill.component';
import { BtnAddProyectoComponent } from './componentes/btn-add-proyecto/btn-add-proyecto.component';
import { Persona } from './modelos/persona';
import { LoginComponent } from './componentes/login/login.component';
import { PorfolioService } from './servicios/porfolio.service';
import { InterceptorService } from './servicios/interceptor.service';
import { AddExperienciaComponent } from './componentes/add-experiencia/add-experiencia.component';
import { EditExperienciaComponent } from './componentes/edit-experiencia/edit-experiencia.component';
import { AddEducacionComponent } from './componentes/add-educacion/add-educacion.component';
import { AddSkillComponent } from './componentes/add-skill/add-skill.component';
import { AddProyectoComponent } from './componentes/add-proyecto/add-proyecto.component';
import { EditAcercaDeComponent } from './componentes/edit-acerca-de/edit-acerca-de.component';
import { EditBannerComponent } from './componentes/edit-banner/edit-banner.component';
import { EditEducacionComponent } from './componentes/edit-educacion/edit-educacion.component';
import { EditSkillComponent } from './componentes/edit-skill/edit-skill.component';
import { EditProyectoComponent } from './componentes/edit-proyecto/edit-proyecto.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    AcercaDeComponent,
    EducacionComponent,
    ExperienciaComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    NavbarComponent,
    ErrorComponent,
    PorfolioComponent,
    BotonLoginComponent,
    BotonLogoutComponent,
    BtnAddExperienciaComponent,
    BtnAddEducacionComponent,
    BtnAddSkillComponent,
    BtnAddProyectoComponent,
    LoginComponent,
    AddExperienciaComponent,
    EditExperienciaComponent,
    AddEducacionComponent,
    AddSkillComponent,
    AddProyectoComponent,
    EditAcercaDeComponent,
    EditBannerComponent,
    EditEducacionComponent,
    EditSkillComponent,
    EditProyectoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule, 
    NgCircleProgressModule.forRoot({}),
    ReactiveFormsModule,
    
  ],
  providers: [PorfolioService, 
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
