import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormularioPersonasComponent } from './formulario-personas/formulario-personas.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonaTarjetaComponent } from './persona-tarjeta/persona-tarjeta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';

const material = [
  MatCardModule
]

@NgModule({
  declarations: [
    AppComponent,
    FormularioPersonasComponent,
    PersonaTarjetaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    PersonaTarjetaComponent
  ]
})
export class AppModule { }
