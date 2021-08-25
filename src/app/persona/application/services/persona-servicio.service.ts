import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../../model/persona';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PersonaServicioService {

  private urlpersona: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  //HEADER
  headers(){
    return { 
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer`
    }
  }

  //Obtener todos
  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.urlpersona);
  }

  //Obtener una persona
  getPersona(id: number): Observable<Persona> {
    //ERROR PUESTO A PROPOSITO, PARA VER QUE FUNCIONA EL RESOLVER. PARA QUE FUNCIONE, QUITAR EL 'a'
    return this.http.get<Persona>(this.urlpersona +'/' + id, {
      headers: this.headers()
    });
  }

  //Crear persona
  add(persona: Persona): Observable<Persona> {
    console.log(persona)
    return this.http.post<Persona>(this.urlpersona, persona);
  }

  //Borrar persona
  delete(id: number): Observable<Persona> {
    return this.http.delete<Persona>(this.urlpersona + '/' + id);
  }

  //Actualizar persona
  update(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(this.urlpersona + '/' + persona.id, persona);
  }

}
