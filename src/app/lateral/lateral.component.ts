import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-lateral',
  templateUrl: './lateral.component.html',
  styleUrls: ['./lateral.component.scss']
})
export class LateralComponent implements OnInit {

  showFiller = false;
  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  volver(){
    this.location.back(); 
}

}
