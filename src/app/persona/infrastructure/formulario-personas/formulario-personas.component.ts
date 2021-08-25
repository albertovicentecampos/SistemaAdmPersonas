import { Component, OnInit, Input, Output, EventEmitter, KeyValueDiffers } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { inicializar, Persona } from '../../model/persona';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaServicioService } from '../../application/services/persona-servicio.service';
import { ThemePalette } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-formulario-personas',
  templateUrl: './formulario-personas.component.html',
  styleUrls: ['./formulario-personas.component.scss'],
})
export class FormularioPersonasComponent implements OnInit {

  @Input() personaEditar: Persona = inicializar();
  @Output() personaInsertada: EventEmitter<Persona> = new EventEmitter();
  @Input() valorBoton: boolean = true;

  title: string = "EDICIÓN PERSONAS"
  id: number = -1

  color: ThemePalette = 'primary';

  persona: Persona = inicializar();

  personaPrueba: Persona = inicializar();

  hide = true;

  registerForm = this.formBuilder.group({
    user: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    password: ['',[Validators.required, Validators.minLength(8)]],
    surname: ['',[Validators.required]],
    email_empresa: ['',[Validators.required, Validators.email]],
    email_personal: ['',[Validators.required, Validators.email]],
    ciudad: ['',[Validators.required]],
    actividad: [false],
    fecha: [new Date(),[Validators.required]],
    imagen_url: [''],
    termination_date: [new Date()]
  })


  constructor(private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private personaServicio: PersonaServicioService,
    private route: Router,
    private matSnackBar: MatSnackBar, 
    private location: Location
  ) {

    this.personaPrueba = this.router.snapshot.data.persona
    console.log(this.router.snapshot.data.persona)

  }

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

  submit(): void {
    if(this.registerForm.invalid){
      return; 
    }else{
      if (!this.id) {
        this.crearPersona();
      } else {
        this.editarPersona();
      }
    }
  }

  cancelar(): void {
    this.route.navigate(['/inicio']);
  }

  crearPersona(): void {
    this.persona = this.registerForm.value;
    this.personaServicio.add(this.persona).subscribe(c => {
      this.persona = c;
      this.personaInsertada.emit(this.persona)
      this.route.navigate(['/inicio']);
      this.mensaje("Persona creada")
    });

    //this.insertar.emit(this.persona.id)
  }

  editarPersona(): void {
    this.persona = this.registerForm.value;
    this.persona.id = this.id;
    this.personaServicio.update(this.persona).subscribe(c => {
      this.persona = c;
      this.route.navigate(['/inicio']);
      this.mensaje("Campos modificados")
    });
  }

  mensaje(mensaje: string){
    this.matSnackBar.open(mensaje, " ",{
      duration:3000
    })
  }


  campoValido(campo : string){
    return this.registerForm.controls[campo].errors && this.registerForm.controls[campo].touched; 
  }

  volver(){
      this.location.back(); 
  }
  

}
