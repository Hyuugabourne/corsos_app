import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { Curso } from "assets/curso.model";
import { CategoriaService } from "assets/services/categoria.service";
import * as moment from "moment";

type ValidationErrors = {
  [key: string]: any;
};

@Component({
  selector: "app-form-curso",
  templateUrl: "./form-curso.component.html",
  styleUrls: ["./form-curso.component.css"],
})
export class FormCursoComponent implements OnInit {
  form: FormGroup;
  @Input() curso: Curso;
  @Output() salvarCurso = new EventEmitter<Curso>();
  categorias: string[];

  constructor(
    private formBuilder: FormBuilder,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [null],
      assunto: [null, Validators.required],
      inicio: [null, [Validators.required, this.DataAtualValidator()]],
      fim: [null, [Validators.required, this.DataFutura("inicio")]],
      categoria: [null, Validators.required],
      quantidadeAlunos: [null],
    });
    if (Object.keys(this.curso).length > 0) {
      Object.keys(this.form.controls).forEach(campo => {
        this.form.get(campo).setValue(this.curso[campo])
      })
    }
    this.categoriaService.list().subscribe((result) => {
      this.categorias = result;
    });
  }

  DataAtualValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors => {
      if (control.value == null) return null;
      let inicio = moment(control.value);
      let dataAtual = moment();
      return inicio.isBefore(dataAtual) ? { dataAtual: true } : null;
    };
  }

  DataFutura(campo: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors => {
      if (control.value == null) return null;
      if (this.form.controls[campo].value == null) return null;
      let fim = moment(control.value);
      let inicio = moment(this.form.controls[campo].value);
      return inicio.isAfter(fim) ? { dataFutura: true } : null;
    };
  }

  CancelarCurso() {
    if (this.form.valid) {
      this.salvarCurso.emit(this.form.value);
    } else {
      this.salvarCurso.emit(null);
    }
    this.form.reset();
  }

  SalvarCurso() {
    Object.keys(this.form.controls).forEach((it) =>
      this.form.controls[it].updateValueAndValidity()
    );
    if (this.form.valid) {
      let curso = this.form.value;
      this.salvarCurso.emit(curso);
      this.curso = null;
    } else {
      Object.keys(this.form.controls).forEach((it) =>
        this.form.controls[it].markAsDirty()
      );
    }
  }

  CampoValido(campo: string) {
    let control = this.form.get(campo);
    return control.dirty && control.valid;
  }

  CampoInvalido(campo: string) {
    let control = this.form.get(campo);
    return control.dirty && control.invalid;
  }
}
