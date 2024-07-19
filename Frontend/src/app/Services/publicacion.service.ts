import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { appsettings } from '../Settings/appsettings';
import { Publicacion } from '../Models/Publicacion';
import { Comentario } from '../Models/Comentario';

@Injectable({
    providedIn: 'root'
})
export class PublicacionService {
    private http = inject(HttpClient);
    private apiUrl: string = appsettings.apiUrl + "Publicacion";
    private apiUrl2: string = this.apiUrl + "/Comentario";
    constructor() { }

    listaPublicaciones() {
        return this.http.get<Publicacion[]>(this.apiUrl)
    }
    listaComentario(id: number) {
        return this.http.get<Comentario[]>(`${this.apiUrl2}/${id}`);
    }

}