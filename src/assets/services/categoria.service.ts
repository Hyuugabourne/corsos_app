import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Curso } from "assets/curso.model";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { Subject } from "rxjs/Subject";

@Injectable()
export class CategoriaService {
  constructor(private http: Http) {}

  categorias = new Subject<string[]>();

  list(): Observable<string[]> {
    return of([
      "Multiplataforma",
      "Banco de dados",
      "Metodologia",
      "Comportamento",
      "Comunicação",
    ]);
  }
}
