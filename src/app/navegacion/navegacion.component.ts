
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss']
})
export class NavegacionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  insertar(){
    this.router.navigate(['/crear'])
  }

  inicio(){
    this.router.navigate(['/inicio'])
  }

}
