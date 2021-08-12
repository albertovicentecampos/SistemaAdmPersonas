import { Component, OnInit } from '@angular/core';
import { PersonaServicioService } from '../persona/persona-servicio.service';
import { Persona } from '../persona/persona';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  title = 'PERSONAS';
  personas: Persona[] = [];

  constructor(private personaServicio: PersonaServicioService) { }

  ngOnInit(): void {
    this.personaServicio.getPersonas()
    .subscribe(todos =>{
      this.personas=todos;
      console.log(todos);
    })
  }

}
