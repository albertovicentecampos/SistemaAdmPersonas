
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContadorService } from 'src/app/persona/application/services/contador/contador.service';


@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss']
})
export class NavegacionComponent implements OnInit {

  cont: any = 0;
  cont2: number = 0;


  constructor(private router: Router, private contador: ContadorService) {
    this.contador.contador.subscribe(cont2 => {
      this.cont = localStorage.getItem('cont2');
      console.log("HOLA:" + this.cont)
    })
  }

  ngOnInit(): void {
    this.cont = localStorage.getItem('cont2');
  }

  insertar(): void {
    this.router.navigate(['/crear'])
  }

  inicio(): void {
    this.router.navigate(['/inicio'])
  }

}
