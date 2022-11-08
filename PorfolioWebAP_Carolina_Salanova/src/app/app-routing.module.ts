import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ErrorComponent } from './componentes/error/error.component';
import { InicioComponent } from './componentes/inicio/inicio.component';


const routes: Routes = [
   {path: '', component:InicioComponent}, //siempre va primero esta ruta, el oreden aqui es importante
   {path: 'dashboard', component:DashboardComponent}, //es para linkear al dashboard, ir a esa pagina y poder volver
  
   {path: '**', component:ErrorComponent},
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
