import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-menuprof',
  templateUrl: './menuprof.page.html',
  styleUrls: ['./menuprof.page.scss'],
})


export class MenuprofPage implements OnInit {
  alertButtons: string[] = [];

  constructor(private alertController: AlertController, private navCtrl: NavController) { }

  async presentAlert() {
    const alert = await this.alertController.create({

      // Configura tu alerta aquí
    });

    await alert.present();
  }

  goToMenuprofPage() {
    // Navegar hacia atrás en la historia de navegación
    this.navCtrl.back();
  }

  ngOnInit() {
    // Código de inicialización si es necesario

  }
}
