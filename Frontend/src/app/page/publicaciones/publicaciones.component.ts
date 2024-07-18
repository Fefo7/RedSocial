import { Component, inject } from '@angular/core';
import { Publicacion } from '../../Models/Publicacion';
import { PublicacionService } from '../../Services/publicacion.service';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { format } from 'date-fns';

@Component({
  selector: 'app-publicaciones',
  standalone: true,
  imports: [MatCardModule, NgFor, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './publicaciones.component.html',
  styleUrl: './publicaciones.component.css'
})
export class PublicacionesComponent {
  private publiService = inject(PublicacionService);
  public listaPubli: Publicacion[] = [];
  getPublicaciones() {
    this.publiService.listaPublicaciones().subscribe({
      next: (data) => {
        if (data.length > 0) {
          this.listaPubli = data;
        }
      },
      error: (err) => console.log('error')
    });

  }
  // puedo usar router para poder redirigir a otras urls
  constructor(private router: Router) {
    this.getPublicaciones();

  }
  formatearFecha(fecha: Date): string {
    const formattedDate = format(fecha, 'dd/MMM/yyyy ');

    return formattedDate.toString();
  }

}
