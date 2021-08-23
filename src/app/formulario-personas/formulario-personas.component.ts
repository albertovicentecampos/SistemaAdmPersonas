import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { inicializar, Persona } from '../persona/persona';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaServicioService } from '../persona/persona-servicio.service';
import { ThemePalette } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-formulario-personas',
  templateUrl: './formulario-personas.component.html',
  styleUrls: ['./formulario-personas.component.scss'],
})
export class FormularioPersonasComponent implements OnInit {

  @Input() personaEditar: Persona = inicializar();
  //@Output() insertar: EventEmitter<number> = new EventEmitter();

  @Output() personaInsertada: EventEmitter<Persona> = new EventEmitter();

  title: string = "EDICION PERSONAS"
  id: number = -1

  color: ThemePalette = 'primary';
  checked = false;
  disabled = false;

  isChecked = true;

  persona: Persona = inicializar();

  personaPrueba: Persona = inicializar();

  @Input() valorBoton: boolean = true;

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


  constructor(private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private personaServicio: PersonaServicioService,
    private route: Router,
    private matSnackBar: MatSnackBar
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

    //console.log(this.router.snapshot.data.persona)

    if (!this.id) return;
    this.personaServicio.getPersona(this.id).subscribe(
      usuario => {
        this.persona = usuario;
        this.registerForm.patchValue(this.persona);
      }
    )
  }

  submit(): void {
    if (!this.id) {
      this.crearPersona();
    } else {
      this.editarPersona();
    }
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

  

}
