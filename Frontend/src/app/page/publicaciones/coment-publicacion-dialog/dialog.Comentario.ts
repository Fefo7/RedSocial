import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { Comentario } from '../../../Models/Comentario';
import { PublicacionService } from '../../../Services/publicacion.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
@Component({
    selector: 'app-publicaciones',
    standalone: true,
    imports: [MatDialogModule, NgFor],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dialog.Comentario.html',

})
export class DialogComentario {
    private publiService = inject(PublicacionService);
    public listaComent: Comentario[] = [];
    async getComentario() {
        this.publiService.listaComentario(1).subscribe({
            next: (data) => {
                if (data.length > 0) {
                    this.listaComent = data;
                }
            },
            error: (err) => console.log('error')
        });

    }
    constructor(private router: Router) {
        this.getComentario();

    }
}