import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prof-registro-asistencia',
  templateUrl: './prof-registro-asistencia.page.html',
  styleUrls: ['./prof-registro-asistencia.page.scss'],
})
export class ProfRegistroAsistenciaPage {

  constructor(private router: Router) { }

  generarQR(){
    this.router.navigate(['/codigo-qr']);
  }

  

}
