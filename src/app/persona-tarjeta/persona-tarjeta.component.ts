import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { inicializar, Persona } from '../persona/persona';
import { Router } from '@angular/router';
import { PersonaServicioService } from '../persona/persona-servicio.service';
import { ContadorService } from '../contador.service';
import { VentanaDialogComponent } from '../ventana-dialog/ventana-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-persona-tarjeta',
  templateUrl: './persona-tarjeta.component.html',
  styleUrls: ['./persona-tarjeta.component.scss']
})
export class PersonaTarjetaComponent implements OnInit {

  @Input() persona: Persona = inicializar();
  @Output() borrar: EventEmitter<number> = new EventEmitter();

  //TSlint-> Extension 
  constructor(private router: Router, private service: PersonaServicioService, private contadorServicio: ContadorService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  editar(): void {
    this.router.navigate(['/editar', this.persona.id])
  }

  eliminar(): void {
    console.log("Entra para redirigir a inicio");
    this.router.navigate(['/inicio']);
    console.log("ya esta");
    this.service.delete(this.persona.id).subscribe()
    this.borrar.emit(this.persona.id)
    console.log("persona borrada")
  }
}
