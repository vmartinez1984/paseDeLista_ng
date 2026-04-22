import { Routes } from '@angular/router';
import { Inicio } from './components/home/inicio/inicio';
import { ListaDeMaterias } from './components/materia/lista-de-materias/lista-de-materias';
import { ListaDeGrupos } from './components/grupo/lista-de-grupos/lista-de-grupos';
import { DetalleDelGrupo } from './components/grupo/detalle-del-grupo/detalle-del-grupo';

export const routes: Routes = [
    { path: '', component: Inicio },
    { path: 'materias', component: ListaDeMaterias},
    { path:'grupos', component: ListaDeGrupos},
    { path: 'grupos/:id', component: DetalleDelGrupo }
];
