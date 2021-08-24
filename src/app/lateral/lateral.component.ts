import { Component, OnInit, ChangeDetectorRef, OnDestroy} from '@angular/core';
import { Location } from '@angular/common';
import {MediaMatcher} from '@angular/cdk/layout';
@Component({
  selector: 'app-lateral',
  templateUrl: './lateral.component.html',
  styleUrls: ['./lateral.component.scss']
})
export class LateralComponent implements OnInit {

  showFiller = false;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void; 
  
  constructor(private location: Location, 
    changeDetectorRef: ChangeDetectorRef,
     media: MediaMatcher ) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
      }

  ngOnInit(): void {
  }

  volver(){
    this.location.back(); 
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

}
