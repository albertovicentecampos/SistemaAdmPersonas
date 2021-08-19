import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PersonaTarjetaComponent } from '../persona-tarjeta/persona-tarjeta.component';
import { inicializar, Persona } from '../persona/persona';
import { PersonaServicioService } from '../persona/persona-servicio.service';


@Component({
  selector: 'app-ventana-dialog',
  templateUrl: './ventana-dialog.component.html',
  styleUrls: ['./ventana-dialog.component.scss']
})
export class VentanaDialogComponent implements OnInit {

  personas: Persona[] = [];
  vB: boolean = false; 
  
  persona: Persona = inicializar();
  
  constructor(
    public dialogRef: MatDialogRef<VentanaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Persona,
    private personaService: PersonaServicioService) { 
    }

  ngOnInit(): void {
    
  }

  recibirPadre($event: Persona){
    this.persona = $event;
    this.data = this.persona; 
    console.log("holiwi " + this.data.user)
    console.log("helouu "+ this.persona.user)
    this.dialogRef.close(this.persona);
  }



}
