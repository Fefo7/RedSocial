import { Routes } from '@angular/router';
import { InicioComponent } from './page/inicio/inicio.component';
import { CargarUsuarioComponent } from './page/cargar-usuario/cargar-usuario.component';
import { PublicacionesComponent } from './page/publicaciones/publicaciones.component';

//urls de las paginas y enrutados
// se pone 'empleado/:id --> para poder decir que voy a recibir un parametro'
export const routes: Routes =
    [
        { path: '', component: InicioComponent },
        { path: 'inicio', component: InicioComponent },
        { path: 'CargarUsuario', component: CargarUsuarioComponent },
        { path: 'publicaciones', component: PublicacionesComponent }
    ];
