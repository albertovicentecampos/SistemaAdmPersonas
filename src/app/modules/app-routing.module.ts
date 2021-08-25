import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { AppComponent } from '../app.component';
import { ErrorComponent } from '../error/error.component';
import { FormularioPersonasComponent } from '../formulario-personas/formulario-personas.component';
import { ListadoComponent } from '../listado/listado.component';
import { PersonaTarjetaComponent } from '../persona-tarjeta/persona-tarjeta.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'tarjeta',
    component: PersonaTarjetaComponent
  },
  {
    path: 'inicio',
    component: ListadoComponent
  },
  {
    path: 'editar',
    loadChildren: () => import('./persona.module').then(m => m.PersonaModule)
  },
  {
    path: 'crear',
    component: FormularioPersonasComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
