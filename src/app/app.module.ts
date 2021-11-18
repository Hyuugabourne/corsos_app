import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { FormCursoComponent } from './container/form-curso/form-curso.component';
import { CategoriaService } from 'assets/services/categoria.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
    FormCursoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt-BR" },
    CategoriaService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
