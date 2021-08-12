import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from './persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaServicioService {

  private todos = 'http://localhost:3000/personas';

  constructor(private http: HttpClient) { }

  //Obtener todos
  getPersonas(){
    return this.http.get<Persona[]>(this.todos);
  }

  //Crear persona
  add(){
    
  }

  //Obtener persona unica
  getPersona(id: number){

  }
  
  //Borrar persona
  delete(id: number){

  }


}
