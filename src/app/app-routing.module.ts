import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { AppComponent } from './app.component';
import { FormularioPersonasComponent } from './formulario-personas/formulario-personas.component';
import { ListadoComponent } from './listado/listado.component';
import { PersonaEditarComponent } from './persona-editar/persona-editar.component';
import { PersonaTarjetaComponent } from './persona-tarjeta/persona-tarjeta.component';


const routes: Routes = [
    {path: '', redirectTo: '/inicio', pathMatch: 'full'},
    {path: 'tarjeta', component: PersonaTarjetaComponent},
    {path: 'inicio', component: ListadoComponent},
    {path: 'editar/:id', component: FormularioPersonasComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
