import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PersonaTarjetaComponent } from './infrastructure/persona-tarjeta/persona-tarjeta.component';
import { ListadoComponent } from './infrastructure/listado/listado.component';
import { FormularioPersonasComponent } from './infrastructure/formulario-personas/formulario-personas.component';
import { PersonaResolver } from './application/resolvers/persona.resolver';
import { ErrorComponent } from './infrastructure/error/error.component';
import { PersonaRoutingModule } from './persona-routing.module';
import { NavegacionComponent } from './infrastructure/navegacion/navegacion.component';
import { LateralComponent } from './infrastructure/lateral/lateral.component';
import { VentanaDialogComponent } from './infrastructure/ventana-dialog/ventana-dialog.component';

const routes: Routes = [
  {
    path: ':id',
    component: FormularioPersonasComponent,
    resolve: { persona: PersonaResolver }
  }
];


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PersonaRoutingModule
  ]
})
export class PersonaModule { }
