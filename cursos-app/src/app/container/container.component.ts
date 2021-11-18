import { Component, OnInit } from '@angular/core';
import { Curso } from 'assets/curso.model';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  cursos: Curso[]
  curso: Curso

  constructor() { }

  ngOnInit() {

  }

  AdicionarCurso(curso: Curso) {
    if (curso) {
    if(this.cursos == null) this.cursos = [];
      curso.editando = false
      this.cursos.push(curso);
    }
    this.curso = null;
  }

  CriarCurso() {
    this.curso = {} as Curso;
  }

  EditarCurso(cr: Curso, event: Curso) {
    let index = this.cursos.indexOf(cr)
    this.cursos[index] = event
  }

}
