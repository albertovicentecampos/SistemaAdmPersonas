import { Component, OnInit, Inject, Output, EventEmitter} from '@angular/core';
import { PersonaServicioService } from '../persona/persona-servicio.service';
import { Persona } from '../persona/persona';
import { Router } from '@angular/router';
import { ContadorService } from '../contador.service';
import { VentanaDialogComponent } from '../ventana-dialog/ventana-dialog.component';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  title: string = 'LISTA DE PERSONAS';
  valorBoton: boolean = false; 
  personas: Persona[] = [];
  @Output() tit: EventEmitter<string> = new EventEmitter();

  constructor(private personaServicio: PersonaServicioService, 
              private router: Router, 
              private contadorServicio: ContadorService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.tit.emit(this.title);
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

  openDialog(): void {
    const dialogRef = this.dialog.open(VentanaDialogComponent, {
      height: '600px',
      width: '800px',
      data: {personas: this.personas}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.personas.push(result)
      }
    });
  }

}


