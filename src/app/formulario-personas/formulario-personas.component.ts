import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { inicializar, Persona } from '../persona/persona';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaServicioService } from '../persona/persona-servicio.service';

@Component({
  selector: 'app-formulario-personas',
  templateUrl: './formulario-personas.component.html',
  styleUrls: ['./formulario-personas.component.scss']
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


  constructor(private formBuilder: FormBuilder, private router: ActivatedRoute, private personaServicio: PersonaServicioService, private route: Router) { }

  ngOnInit(): void {
    this.router.params.subscribe(
      params => {
        this.id = params['id']
        console.log(this.id)
      }
    )

    if (!this.id) return;
    this.personaServicio.getPersona(this.id).subscribe(
      usuario => {
        this.persona = usuario;
        this.registerForm.patchValue(this.persona);
      }
    )
  }

  submit() {
    if (!this.id) {
      this.crearPersona();
      this.route.navigate(['/inicio']);
    } else {
      this.editarPersona();
      this.route.navigate(['/inicio']);
    }
  }

  crearPersona() {
    this.persona = this.registerForm.value;
    this.personaServicio.add(this.persona).subscribe();
  }

  editarPersona() {
    this.persona = this.registerForm.value;
    this.persona.id = this.id;
    this.personaServicio.update(this.persona).subscribe();
  }

}
