export interface Comentario {
    comentarioId?: number;
    contenido?: string;
    fechaPublicacion: Date;
    publicacionId: number;
    usuarioId: number;
}