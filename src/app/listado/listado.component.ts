import { Component, OnInit } from '@angular/core';
import { PersonaServicioService } from '../persona/persona-servicio.service';
import { Persona } from '../persona/persona';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  title = 'LISTA DE PERSONAS';
  personas: Persona[] = [];

  constructor(private personaServicio: PersonaServicioService, private router: Router) { }

  ngOnInit(): void {
    this.personaServicio.getPersonas()
    .subscribe(todos =>{
      this.personas=todos;
      console.log(todos);
    })
  }

  crear(){
    this.router.navigate(['/crear'])
  }

  recibirEliminar($event: number){
    this.personas = this.personas.filter((persona: Persona) => persona.id !== $event )
  }
}
