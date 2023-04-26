import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCursosComponent } from './listar-cursos/listar-cursos.component';
import { CrearCursosComponent } from './crear-cursos/crear-cursos.component';

const routes: Routes = [
  {path: 'cursos', component: ListarCursosComponent},
  {path: 'cursos/crear', component: CrearCursosComponent},
  {path: 'cursos/editar/:id', component: CrearCursosComponent},
  {path: '**', redirectTo:'/cursos', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
