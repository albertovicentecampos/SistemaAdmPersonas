import { Component, Input, OnInit} from '@angular/core';
import { inicializar, Persona } from '../persona/persona';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona-tarjeta',
  templateUrl: './persona-tarjeta.component.html',
  styleUrls: ['./persona-tarjeta.component.css']
})
export class PersonaTarjetaComponent implements OnInit {

  @Input() persona: Persona = inicializar();


  //TSlint-> Extension 
  constructor(private router: Router) {
    
   }

  ngOnInit(): void {
  }

  getPersonas(){
  }

  editar(){
    this.router.navigate(['/editar', this.persona.id])
  }
}
