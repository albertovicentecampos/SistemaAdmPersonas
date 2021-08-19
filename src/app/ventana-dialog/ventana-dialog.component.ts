import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Persona } from '../persona/persona';
import { PersonaServicioService } from '../persona/persona-servicio.service';


@Component({
  selector: 'app-ventana-dialog',
  templateUrl: './ventana-dialog.component.html',
  styleUrls: ['./ventana-dialog.component.scss']
})
export class VentanaDialogComponent implements OnInit {

  personas: Persona[] = [];
  vB: boolean = false; 
  
  constructor(
    public dialogRef: MatDialogRef<VentanaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Persona, private  personaServicio: PersonaServicioService) { }

  onNoClick(): void {
    window.location.reload();
    this.dialogRef.close();
  }

  ngOnInit(): void {
    
  }


}
