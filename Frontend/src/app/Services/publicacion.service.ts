import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { appsettings } from '../Settings/appsettings';
import { Publicacion } from '../Models/Publicacion';

@Injectable({
    providedIn: 'root'
})
export class PublicacionService {
    private http = inject(HttpClient);
    private apiUrl: string = appsettings.apiUrl + "Publicacion";

    constructor() { }

    listaPublicaciones() {
        return this.http.get<Publicacion[]>(this.apiUrl)
    }

}