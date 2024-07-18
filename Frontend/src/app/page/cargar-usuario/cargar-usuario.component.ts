import { Component, Input, OnInit, inject, input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from '../../Services/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../../Models/Usuario';
@Component({
  selector: 'app-cargar-usuario',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule,
    MatButtonModule, ReactiveFormsModule],
  templateUrl: './cargar-usuario.component.html',
  styleUrl: './cargar-usuario.component.css'
})
export class CargarUsuarioComponent implements OnInit {

  @Input("id") usId!: number;
  private usarioService = inject(UsuarioService);
  public formBuild = inject(FormBuilder);

  public formUsuario: FormGroup = this.formBuild.group({
    Nombre: [''],
    Apellido: [''],
    fechaNaciemiento: [''],
    claveUsuarios: ['']
  });
  constructor(private router: Router) { }

  //cuando incia nuestra aplicacion 
  ngOnInit(): void {

    this.usarioService.Obtener(4).subscribe({
      next: (data) => {
        this.formUsuario.patchValue({
          Nombre: data.nombre,
          Apellido: data.apellido,
          fechaNaciemiento: data.fechaNaciemiento,
          claveUsuarios: data.claveUsuarios,
        })
      }
    })

  }

  guardar() {
    const objeto: Usuario = {
      nombre: this.formUsuario.value.Nombre,
      apellido: this.formUsuario.value.Apellido,
      fechaNaciemiento: "2024-07-02T14:05:22.908",
      claveUsuarios: this.formUsuario.value.claveUsuarios,
    }
    this.usarioService.crear(objeto).subscribe({
      next: (data) => {
        if (data != null) {
          this.router.navigate(["/"]);
        } else {
          alert("Error al crear")
        }
      },
      error: (err) => {
        console.log(err.message);
      }
    })


  }
  volver() {
    this.router.navigate(["/"]);
  }
}