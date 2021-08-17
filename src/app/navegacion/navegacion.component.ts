
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContadorService } from '../contador.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss']
})
export class NavegacionComponent implements OnInit {

  cont: number = 0; 

  constructor(private router: Router, private contador: ContadorService ) {
      this.contador.contador.subscribe(c => {
        this.cont = c; 
      })
   }

  ngOnInit(): void {
  }

  insertar(): void {
    this.router.navigate(['/crear'])
  }

  inicio(): void {
    this.router.navigate(['/inicio'])
  }

}
