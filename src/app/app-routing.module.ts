import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { Metodo1Component } from './metodos/metodo1/metodo1.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/eliminar', component: Metodo1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
