import { Component, OnInit, Inject} from '@angular/core';
import { PersonaServicioService } from '../persona/persona-servicio.service';
import { Persona } from '../persona/persona';
import { Router } from '@angular/router';
import { ContadorService } from '../contador.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  title: string = 'LISTA DE PERSONAS';
  personas: Persona[] = [];

  constructor(private personaServicio: PersonaServicioService, private router: Router, private contadorServicio: ContadorService) { }

  ngOnInit(): void {
    this.personaServicio.getPersonas()
    .subscribe(todos =>{
      this.personas=todos;
      console.log(todos);
    })
  }

  crear(): void {
    this.router.navigate(['/crear'])
  }

  recibirEliminar($event: number): void{
    this.personas = this.personas.filter((persona: Persona) => persona.id !== $event )
    this.contadorServicio.incrementar2(); 
  }



}


