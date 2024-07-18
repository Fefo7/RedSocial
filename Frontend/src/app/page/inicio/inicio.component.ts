import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { UsuarioService } from '../../Services/usuario.service';
import { Usuario } from '../../Models/Usuario';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MatCardModule, MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  private usarioService = inject(UsuarioService);
  public listaUsuarios: Usuario[] = [];
  public displayedColumns: string[] = ['UsuarioId', 'Nombre', 'Apellido', 'fechaNaciemiento', 'claveUsuarios'];

  obtenerUsuarios() {
    this.usarioService.lista().subscribe({
      next: (data) => {
        if (data.length > 0) {
          this.listaUsuarios = data;
        }
      },
      error: (err) => console.log('error')

    });

  }
  // puedo usar router para poder redirigir a otras urls
  constructor(private router: Router) {
    this.obtenerUsuarios();
  }
  nuevo() {
    this.router.navigate(['/CargarUsuario']);
  }




}
