import { Component, OnInit } from '@angular/core';
import { PersonaServicioService } from './persona/persona-servicio.service';
import { Persona } from './persona/persona';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Personas';
  personas: Persona[] = [];
 
  constructor (private personaServicio: PersonaServicioService){}

  ngOnInit(): void {
    this.personaServicio.getPersonas()
    .subscribe(todos =>{
      this.personas=todos;
      console.log(todos);
    })
  }


}
