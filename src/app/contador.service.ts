import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  contador: EventEmitter<number> = new EventEmitter<number>();

  cont: number = 0; 
  constructor() { }

  incrementar(){
    this.cont++;
    this.contador.emit(this.cont)
  }

}
