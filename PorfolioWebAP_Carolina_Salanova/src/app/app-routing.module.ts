import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './componentes/error/error.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { LoginComponent } from './componentes/login/login.component';
import { GuardGuard } from './servicios/guard.guard';
import { AddExperienciaComponent } from './componentes/add-experiencia/add-experiencia.component';
import { AddEducacionComponent } from './componentes/add-educacion/add-educacion.component';
import { EditSkillComponent } from './componentes/edit-skill/edit-skill.component';
import { AddSkillComponent } from './componentes/add-skill/add-skill.component';


const routes: Routes = [
   {path: '', component:PorfolioComponent}, //siempre va primero esta ruta, el orden aqui es importante
   {path: 'login', component:LoginComponent},//rutea al componente login
   //{path:'',redirectTo:'login',pathMatch:'full'},
   {path: 'porfolio', component:PorfolioComponent, canActivate:[GuardGuard]},
   {path: 'addExperiencia', component:AddExperienciaComponent},
   {path: 'addEducacion', component:AddEducacionComponent},
   {path: 'addSkill', component:AddSkillComponent},
   {path: 'editSkill', component:EditSkillComponent},
   {path: '**', component:ErrorComponent},
  
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
