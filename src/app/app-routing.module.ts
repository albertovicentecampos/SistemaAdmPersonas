import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { AppComponent } from './app.component';
import { FormularioPersonasComponent } from './formulario-personas/formulario-personas.component';
import { PersonaTarjetaComponent } from './persona-tarjeta/persona-tarjeta.component';


const routes: Routes = [
    {path: '', redirectTo: '/inicio', pathMatch: 'full'},
    {path: 'tarjeta', component: PersonaTarjetaComponent},
    {path: 'inicio', component: AppComponent},
    {path: 'editar/:id', component: FormularioPersonasComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
