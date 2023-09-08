import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ProfRegistroAsistenciaPageRoutingModule } from './prof-registro-asistencia-routing.module';

import { ProfRegistroAsistenciaPage } from './prof-registro-asistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfRegistroAsistenciaPageRoutingModule
  ],
  declarations: [ProfRegistroAsistenciaPage]
})
export class ProfRegistroAsistenciaPageModule {

  listaDeCursos = [
    { id: 1, curso: 'Ingles 1' },
    { id: 2, curso: 'Programación APP' },
    { id: 3, curso: 'Matematica' },
  ];

  constructor(private router: Router) {}

  irAPaginaDestino() {
    alert("alerrta")
    const navigationExtras = {
      state: {
        elementos: this.listaDeCursos,
      },
    };

    this.router.navigate(['codigo-qr'], navigationExtras);
  }
}
