import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { inicializar, Persona } from '../../model/persona';
import { Router } from '@angular/router';
import { PersonaServicioService } from '../../application/services/persona-servicio.service';
import { ContadorService } from '../../application/services/contador/contador.service';
import { VentanaDialogComponent } from '../ventana-dialog/ventana-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VentanaBorrarComponent } from '../ventana-borrar/ventana-borrar.component';




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
    //nuevo
    const dialogRef = this.dialog.open(VentanaBorrarComponent, {
      height: '200px',
      width: '300px',
      data: ""
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['/inicio']);
        this.service.delete(this.persona.id).subscribe()
        this.borrar.emit(this.persona.id)
      }
    });
  }
}
