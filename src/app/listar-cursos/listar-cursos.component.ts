import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { CursoModel } from '../shared/curso.model';
import { CursoService } from '../shared/curso.service';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent implements OnInit {
  
  cursos: Observable<CursoModel[]> | undefined;

  constructor(private cursoService: CursoService){}

  ngOnInit(){
    this.cursos = this.cursoService.getCursos()
  }

  deleteCurso(id: string){
    this.cursoService.deleteCurso(id).subscribe(data => {
      console.log(data)
      alert(data)
      this.cursos = this.cursoService.getCursos()
    }, error => {
      console.log(error)
      alert(error.error.text)
      this.cursos = this.cursoService.getCursos()
    })
  }
}
