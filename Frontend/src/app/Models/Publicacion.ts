import { Comentario } from "./Comentario";
import { Usuario } from "./Usuario";

export interface Publicacion {
    PublicacionId?: number;
    titulo?: string;
    descripcion?: string;
    fechaPublicacion: Date;
    usuarios: Usuario;
    comentarios: Comentario[];
}