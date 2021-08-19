import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { VentanaDialogComponent } from '../ventana-dialog/ventana-dialog.component';
//import { FormularioPersonasComponent } from '../formulario-personas/formulario-personas.component';

@Component({
  selector: 'app-ventana',
  templateUrl: './ventana.component.html',
  styleUrls: ['./ventana.component.scss']
})
export class VentanaComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  vB: boolean = false;

  ngOnInit(): void {
  }

    openDialog(): void {
    const dialogRef = this.dialog.open(VentanaDialogComponent, {
      width: '500px',
      //data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}

