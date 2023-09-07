import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.page.html',
  styleUrls: ['./codigo-qr.page.scss'],
})

export class CodigoQRPage implements OnInit {

  constructor(private route: ActivatedRoute) { }

  id!: number;
  nombre!: string;
  seccion!: string;
  sala!: string;
  horario!: string;

  ngOnInit() {
    // Recupera los datos de los queryParams
    this.route.queryParams.subscribe(params => {
    this.id = params['id'];
    this.nombre = params['nombre'];
    this.seccion = params['seccion'];
    this.sala = params['sala'];
    this.horario = params['horario'];
  });
  
}



}
