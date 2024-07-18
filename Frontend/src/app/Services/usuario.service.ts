import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { appsettings } from '../Settings/appsettings';
import { Usuario } from '../Models/Usuario';
import { ResponseAPI } from '../Models/ReponseAPI';
// aca creamos las solicitudes http para la api
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private http = inject(HttpClient);
  private apiUrl: string = appsettings.apiUrl + "Usuarios";

  constructor() { }

  lista() {
    return this.http.get<Usuario[]>(this.apiUrl);
  }
  Obtener(id: number) {
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
  }
  crear(objeto: Usuario) {
    return this.http.post<ResponseAPI>(this.apiUrl, objeto);
  }
}
