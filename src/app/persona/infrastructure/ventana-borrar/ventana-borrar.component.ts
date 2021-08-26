import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ventana-borrar',
  templateUrl: './ventana-borrar.component.html',
  styleUrls: ['./ventana-borrar.component.scss']
})
export class VentanaBorrarComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<VentanaBorrarComponent>) { }

  ngOnInit(): void {
  }

  cerrar(){
    this.dialogRef.close();
  }
}
