import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  contador: EventEmitter<number> = new EventEmitter<number>();

  cont: number = 0; 
  cont2: any = 0; 

  constructor() { this.cont2 = localStorage.getItem('cont2')}


  incrementar2(): void {
    this.cont2++;
    localStorage.setItem('cont2', this.cont2)
    this.contador.emit(this.cont2);
  }

}
