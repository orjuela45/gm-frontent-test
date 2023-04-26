import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CursoModel } from './curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  BASE_URL = 'http://localhost:8000/api'

  constructor(
    private http: HttpClient
  ) { }

  getCursos(){
    return this.http.get<CursoModel[]>(`${this.BASE_URL}`)
  }
  getCurso(id: string){
    return this.http.get<CursoModel>(`${this.BASE_URL}/${id}`)
  }
  createCurso(curso: CursoModel){
    return this.http.post<CursoModel>(`${this.BASE_URL}`, curso)
  }
  updateCurso(curso: CursoModel){
    return this.http.put<CursoModel>(`${this.BASE_URL}/${curso.id}`, curso)
  }
  deleteCurso(id: string){
    return this.http.delete<string>(`${this.BASE_URL}/${id}`)
  }
}
