import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { LoginComponent } from './componentes/modals/login/login.component';
import { EditBannerComponent } from './componentes/modals/edit-banner/edit-banner.component';
import { EditAcercaDeComponent } from './componentes/modals/edit-acerca-de/edit-acerca-de.component';
import { EditExperienciaComponent } from './componentes/modals/edit-experiencia/edit-experiencia.component';
import { ErrorComponent } from './componentes/error/error.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { EditEducacionComponent } from './componentes/modals/edit-educacion/edit-educacion.component';
import { EditSkillComponent } from './componentes/modals/edit-skill/edit-skill.component';
import { EditProyectoComponent } from './componentes/modals/edit-proyecto/edit-proyecto.component';
import { AddExperienciaComponent } from './componentes/modals/add-experiencia/add-experiencia.component';
import { AddEducacionComponent } from './componentes/modals/add-educacion/add-educacion.component';
import { AddSkillComponent } from './componentes/modals/add-skill/add-skill.component';
import { AddProyectoComponent } from './componentes/modals/add-proyecto/add-proyecto.component';

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
    LoginComponent,
    EditBannerComponent,
    EditAcercaDeComponent,
    EditExperienciaComponent,
    ErrorComponent,
    DashboardComponent,
    EditEducacionComponent,
    EditSkillComponent,
    EditProyectoComponent,
    AddExperienciaComponent,
    AddEducacionComponent,
    AddSkillComponent,
    AddProyectoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
