import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {
  alertButtons: string[] = [];

  constructor(private alertController: AlertController, private navCtrl: NavController) { }

  async presentAlert() {
    const alert = await this.alertController.create({

    });

    await alert.present();
  }

  goToLoginPage() {
    // Utiliza NavController para navegar a la página de login
    this.navCtrl.navigateForward('/login'); // Asegúrate de que '/login' sea la ruta correcta a tu página de login
  }

  ngOnInit() {
    // Código relacionado con ngOnInit
  }
}
