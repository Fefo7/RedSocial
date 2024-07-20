import { Component, ChangeDetectionStrategy, inject, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';


import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { PublicacionService } from '../../../Services/publicacion.service';
import { Comentario } from '../../../Models/Comentario';


@Component({
    selector: 'app-publicaciones',
    standalone: true,
    imports: [MatDialogModule, NgFor],
    templateUrl: './dialog.Comentario.html',
})
export class DialogComentario {
    private publiService = inject(PublicacionService);
    public listaComent: Comentario[] = [];
    getComentario(id: number) {
        this.publiService.listaComentario(id).subscribe({
            next: (data) => {
                if (data.length > 0) {
                    this.listaComent = data;
                }
            },
            error: (err) => console.log('error')
        });

    }
    constructor(private router: Router,
        public dialogRef: MatDialogRef<DialogComentario>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        this.getComentario(data);
    }


}