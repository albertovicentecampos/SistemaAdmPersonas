import { Component, OnInit, Input} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { inicializar, Persona } from '../persona/persona';

@Component({
  selector: 'app-formulario-personas',
  templateUrl: './formulario-personas.component.html',
  styleUrls: ['./formulario-personas.component.css']
})
export class FormularioPersonasComponent implements OnInit {

  @Input() personaEditar: Persona = inicializar();
  
  constructor(private formBuilder: FormBuilder) { }

  registerForm = this.formBuilder.group({
    usuario: [this.personaEditar.user],
    password: [''],
    apellidos: [''],
    emailempresa: [''],
    emailpersonal: [''],
    ciudad: [''],
    actividad: [false],
    fechainicio: [new Date()],
    imagen: [''],
    fechafin: [new Date()]
  })

  ngOnInit(): void {
  }

  submit(){
    console.log(this.registerForm.value)
  }

}
