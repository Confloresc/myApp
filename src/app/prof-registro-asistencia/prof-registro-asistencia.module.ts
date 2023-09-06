import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
export class ProfRegistroAsistenciaPageModule {}
