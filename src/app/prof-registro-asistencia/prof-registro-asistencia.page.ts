import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-prof-registro-asistencia',
  templateUrl: './prof-registro-asistencia.page.html',
  styleUrls: ['./prof-registro-asistencia.page.scss'],
})
  export class ProfRegistroAsistenciaPage implements OnInit {
    alertButtons: string[] = [];
  
    constructor(private alertController: AlertController, private navCtrl: NavController) { }
  
    async presentAlert() {
      const alert = await this.alertController.create({
  
      });
  
      await alert.present();
    }
  
    goToMenuprofPage() {
      
      this.navCtrl.navigateForward('/Menuprof');
    }
  
    ngOnInit() {
  
    }
  }