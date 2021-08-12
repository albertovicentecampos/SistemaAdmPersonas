import { Component, OnInit, Input} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { inicializar, Persona } from '../persona/persona';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario-personas',
  templateUrl: './formulario-personas.component.html',
  styleUrls: ['./formulario-personas.component.css']
})
export class FormularioPersonasComponent implements OnInit {

  @Input() personaEditar: Persona = inicializar();
  
  title = "EDICION PERSONAS"
  id = -1
  
  registerForm = this.formBuilder.group({
    usuario: [''],
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


  constructor(private formBuilder: FormBuilder, private router: ActivatedRoute) { }

  ngOnInit(): void {
      this.router.params.subscribe(
        params => {
          this.id = params['id']
          console.log(this.id)
        }
      )
  }

  submit(){
    
    console.log(this.registerForm.value)
    console.log()
  }




}
