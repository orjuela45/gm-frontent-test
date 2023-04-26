import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarCursosComponent } from './listar-cursos/listar-cursos.component';
import { CursoService } from './shared/curso.service';
import { CrearCursosComponent } from './crear-cursos/crear-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarCursosComponent,
    CrearCursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CursoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
