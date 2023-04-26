import { Component, OnInit } from '@angular/core';
import { CursoService } from '../shared/curso.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoModel } from '../shared/curso.model';

@Component({
  selector: 'app-crear-cursos',
  templateUrl: './crear-cursos.component.html',
  styleUrls: ['./crear-cursos.component.css']
})
export class CrearCursosComponent implements OnInit {

  id = null
  curso = new CursoModel("","",new Date(), new Date("tomorrow"));

  constructor(
    private cursoService: CursoService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    if (this.id){
      this.cursoService.getCurso(this.id).subscribe((data: any) => {
        this.curso = data
      })
    }
  }

  onSubmit(){
    if(!this.validateDates()){
      return;
    }
    if (this.curso.id){
      this.cursoService.updateCurso(this.curso).subscribe(() => {
        this.router.navigate(['/cursos'])
      })
    } else {
      this.cursoService.createCurso(this.curso).subscribe(() => {
        this.router.navigate(['/cursos'])
      })
    }
  }

  validateDates(){
    if (this.curso.fechaInicio > this.curso.fechaFin){
      alert("La fecha de inicio no puede ser mayor que la fecha final")
      return false
    }
    return true
  }
}
