import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from './persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaServicioService {

  private urlpersona = 'http://localhost:3000/personas';

  constructor(private http: HttpClient) { }

  //Obtener todos
  getPersonas() {
    return this.http.get<Persona[]>(this.urlpersona);
  }

  //Obtener una persona
  getPersona(id: number) {
    return this.http.get<Persona>(this.urlpersona + '/' + id);
  }

  //Crear persona
  add(persona: Persona) {
    return this.http.post<Persona>(this.urlpersona, persona);
  }

  //Borrar persona
  delete(id: number) {
    return this.http.delete(this.urlpersona + '/' + id);
  }

  //Actualizar persona
  update(persona: Persona) {
    console.log(persona)
    return this.http.put<Persona>(this.urlpersona + '/' + persona.id, persona);
  }

}
