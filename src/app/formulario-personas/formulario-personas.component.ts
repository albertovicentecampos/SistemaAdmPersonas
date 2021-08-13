import { Component, OnInit, Input} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { inicializar, Persona } from '../persona/persona';
import { ActivatedRoute } from '@angular/router';
import { PersonaServicioService } from '../persona/persona-servicio.service';

@Component({
  selector: 'app-formulario-personas',
  templateUrl: './formulario-personas.component.html',
  styleUrls: ['./formulario-personas.component.css']
})
export class FormularioPersonasComponent implements OnInit {

  @Input() personaEditar: Persona = inicializar();
  
  title = "EDICION PERSONAS"
  id = -1

  persona: Persona = inicializar();
  
  registerForm = this.formBuilder.group({
    user: [''],
    password: [''],
    surname: [''],
    email_empresa: [''],
    email_personal: [''],
    ciudad: [''],
    actividad: [false],
    fecha: [new Date()],
    imagen_url: [''],
    termination_date: [new Date()]
  })


  constructor(private formBuilder: FormBuilder, private router: ActivatedRoute, private personaServicio: PersonaServicioService) { }

  ngOnInit(): void {
      this.router.params.subscribe(
        params => {
          this.id = params['id']
          console.log(this.id)
        }
      )

      this.personaServicio.getPersona(this.id).subscribe(
        usuario => {
          this.persona = usuario;
          this.registerForm.patchValue(this.persona);
        }
      )
  }

  submit(){
    console.log(this.registerForm.value)
    console.log()
  }




}
