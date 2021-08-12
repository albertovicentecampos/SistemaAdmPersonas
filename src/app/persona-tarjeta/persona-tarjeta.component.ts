import { Component, Input, OnInit} from '@angular/core';
import { inicializar, Persona } from '../persona/persona';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-persona-tarjeta',
  templateUrl: './persona-tarjeta.component.html',
  styleUrls: ['./persona-tarjeta.component.css']
})
export class PersonaTarjetaComponent implements OnInit {

  @Input() persona: Persona = inicializar();

  //TSlint-> Extension 
  constructor(private _route: ActivatedRoute) {
    console.log(this._route.snapshot.paramMap.get('id'));
   }

  ngOnInit(): void {
  }

  getPersonas(){
    
  }
}
