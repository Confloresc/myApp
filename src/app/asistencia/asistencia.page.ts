import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})

export class AsistenciaPage implements OnInit {
  alertButtons: string[] = [];

  constructor(private navCtrl: NavController) { }

  goToCursosPage() {
    
    this.navCtrl.back();
  }


  ngOnInit() {

  }
}
