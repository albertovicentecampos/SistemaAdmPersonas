import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { FormularioPersonasComponent } from './formulario-personas/formulario-personas.component';
import { ListadoComponent } from './listado/listado.component';
import { PersonaTarjetaComponent } from './persona-tarjeta/persona-tarjeta.component';
import { PersonaResolver } from './resolvers/persona.resolver';

const routes: Routes = [
    {path: '', redirectTo: '/inicio', pathMatch: 'full'},
    {path: 'tarjeta', component: PersonaTarjetaComponent},
    {path: 'inicio', component: ListadoComponent},
    {
      path: 'editar/:id', 
      component: FormularioPersonasComponent, 
      resolve: {persona: PersonaResolver}
    },
    {path: 'crear' , component: FormularioPersonasComponent},
    {path: 'error' , component: ErrorComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
