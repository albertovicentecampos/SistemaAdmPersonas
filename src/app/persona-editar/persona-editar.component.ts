import { Component, OnInit, Input } from '@angular/core';
import { Persona, inicializar } from '../persona/persona';

@Component({
  selector: 'app-persona-editar',
  templateUrl: './persona-editar.component.html',
  styleUrls: ['./persona-editar.component.css']
})
export class PersonaEditarComponent implements OnInit {

  @Input() persona: Persona = inicializar();

  constructor() { }


  ngOnInit(): void {
  }

}
