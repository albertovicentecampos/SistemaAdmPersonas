import { ActivatedRoute, ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { catchError, delay } from 'rxjs/operators'
import { PersonaServicioService } from '../services/persona-servicio.service'
import { error } from '@angular/compiler/src/util'

@Injectable({
    providedIn: 'root'
})

export class PersonaResolver implements Resolve<Observable<any>>{

    constructor(private personaService: PersonaServicioService) {
    }


    resolve(route: ActivatedRouteSnapshot) {
        let id = Number(route.paramMap.get('id'))
        return this.personaService.getPersona(id).pipe(
            catchError(error => {
                alert('FALLO EN LA RUTA')
                console.log(error)
                //Para que nos devuelva la ruta ponemos algo de texto, pero cuando no queremos que no nos rediriga la ruta no ponemos nada
                return of()
            })
        )


    }

}