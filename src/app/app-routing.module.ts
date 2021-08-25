import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { AppComponent } from './app.component';
import { ErrorComponent } from './persona/infrastructure/error/error.component';
import { FormularioPersonasComponent } from './persona/infrastructure/formulario-personas/formulario-personas.component';
import { ListadoComponent } from './persona/infrastructure/listado/listado.component';
import { PersonaTarjetaComponent } from './persona/infrastructure/persona-tarjeta/persona-tarjeta.component';
import { PersonaRoutingModule } from './persona/persona-routing.module';
import { PersonaModule } from './persona/persona.module';

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
    loadChildren: () => import('./persona/persona.module').then(m => m.PersonaModule)
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

// const routes: Routes = [ 
//   {path: "inicio", loadChildren: () => import("./persona/persona-routing.module").then(m=> m.PersonaRoutingModule)}
// ]


@NgModule({
  imports: [RouterModule.forRoot(routes , {paramsInheritanceStrategy: "always"})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
