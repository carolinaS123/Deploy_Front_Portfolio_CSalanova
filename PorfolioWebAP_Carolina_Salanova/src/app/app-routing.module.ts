import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './componentes/error/error.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { LoginComponent } from './componentes/login/login.component';
import { GuardGuard } from './servicios/guard.guard';
import { EditBannerComponent } from './componentes/edit-banner/edit-banner.component';
import { EditAcercaDeComponent } from './componentes/edit-acerca-de/edit-acerca-de.component';
import { AddExperienciaComponent } from './componentes/add-experiencia/add-experiencia.component';
import { EditExperienciaComponent } from './componentes/edit-experiencia/edit-experiencia.component';
import { AddEducacionComponent } from './componentes/add-educacion/add-educacion.component';
import { EditEducacionComponent } from './componentes/edit-educacion/edit-educacion.component';
import { AddSkillComponent } from './componentes/add-skill/add-skill.component';
import { EditSkillComponent } from './componentes/edit-skill/edit-skill.component';
import { AddProyectoComponent } from './componentes/add-proyecto/add-proyecto.component';
import { EditProyectoComponent } from './componentes/edit-proyecto/edit-proyecto.component';



const routes: Routes = [
   {path: '', component:PorfolioComponent}, //siempre va primero esta ruta, el orden aqui es importante
   {path: 'login', component:LoginComponent},//rutea al componente login
   //{path:'',redirectTo:'login',pathMatch:'full'},
   {path: 'porfolio', component:PorfolioComponent, canActivate:[GuardGuard]},
   {path: 'editBanner/:id', component:EditBannerComponent},
   {path: 'editAcercaDe/:id', component:EditAcercaDeComponent},
   {path: 'addExperiencia', component:AddExperienciaComponent},
   {path: 'editExperiencia/:id', component:EditExperienciaComponent},
   {path: 'addEducacion', component:AddEducacionComponent},
   {path: 'editEducacion/:id', component:EditEducacionComponent},
   {path: 'addSkill', component:AddSkillComponent},
   {path: 'editSkill/:id', component:EditSkillComponent},
   {path: 'addProyecto', component:AddProyectoComponent},
   {path: 'editProyecto/:id', component:EditProyectoComponent},
   {path: '**', component:ErrorComponent},
  
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
