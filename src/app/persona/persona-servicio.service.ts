import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from './persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaServicioService {

  private todos = 'http://localhost:3000/personas';
  private persona = 'http://localhost:3000/personas';

  constructor(private http: HttpClient) { }

  //Obtener todos
  getPersonas(){
    return this.http.get<Persona[]>(this.todos);
  }

  getPersona(id: number){
    return this.http.get<Persona>(this.persona + '/'+ id);
  }

  //Crear persona
  add(){
    
  }

  
  //Borrar persona
  delete(id: number){

  }


}
