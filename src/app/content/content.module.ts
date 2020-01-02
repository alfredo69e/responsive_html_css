import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SassCursoComponent } from './sass-curso/sass-curso.component';
import { FlexboxComponent } from './flexbox/flexbox.component';



const routes: Routes = [
  // { path: '', component: InicioComponent },
  // { path: '', component: SassCursoComponent }
  { path: '', component: FlexboxComponent }

];

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    InicioComponent,
    SassCursoComponent,
    FlexboxComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]

})
export class ContentModule { }
