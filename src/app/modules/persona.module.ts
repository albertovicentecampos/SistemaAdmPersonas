import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PersonaTarjetaComponent } from '../persona-tarjeta/persona-tarjeta.component';
import { ListadoComponent } from '../listado/listado.component';
import { FormularioPersonasComponent } from '../formulario-personas/formulario-personas.component';
import { PersonaResolver } from '../resolvers/persona.resolver';
import { ErrorComponent } from '../error/error.component';

const routes: Routes = [
  {
    path: ':id',
    component: FormularioPersonasComponent,
    resolve: { persona: PersonaResolver }
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PersonaModule { }
