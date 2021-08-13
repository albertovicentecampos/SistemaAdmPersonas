import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { inicializar, Persona } from '../persona/persona';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PersonaServicioService } from '../persona/persona-servicio.service';


@Component({
  selector: 'app-persona-tarjeta',
  templateUrl: './persona-tarjeta.component.html',
  styleUrls: ['./persona-tarjeta.component.scss']
})
export class PersonaTarjetaComponent implements OnInit {

  @Input() persona: Persona = inicializar();
  @Output() borrar: EventEmitter<number> = new EventEmitter();

  //TSlint-> Extension 
  constructor(private router: Router, private service: PersonaServicioService) {
    
   }

  ngOnInit(): void {
  }

  getPersonas(){
  }

  editar(){
    this.router.navigate(['/editar', this.persona.id])
  }

  eliminar(){
    this.service.delete(this.persona.id).subscribe()
    this.borrar.emit(this.persona.id)
    console.log("persona borrada")
  }
}
