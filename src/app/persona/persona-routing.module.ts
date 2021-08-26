import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { AppComponent } from '../app.component';
import { ErrorComponent } from './infrastructure/error/error.component';
import { FormularioPersonasComponent } from './infrastructure/formulario-personas/formulario-personas.component';
import { ListadoComponent } from './infrastructure/listado/listado.component';
import { PersonaTarjetaComponent } from './infrastructure/persona-tarjeta/persona-tarjeta.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  { path: "editar", loadChildren: () => import('./persona.module').then(m => m.PersonaModule) },
  { path: "crear", component: FormularioPersonasComponent },
  { path: "error", component: ErrorComponent },
  { path: "inicio", component: ListadoComponent }

];


@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})

export class PersonaRoutingModule { }