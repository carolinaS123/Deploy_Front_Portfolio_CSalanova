import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ErrorComponent } from './componentes/error/error.component';

const routes: Routes = [
   {path: 'dashboard', component:DashboardComponent}, //es para linkear al dashboard, ir a esa pagina y poder volver
   {path: '', redirectTo: '/', pathMatch:'full'},
   {path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
