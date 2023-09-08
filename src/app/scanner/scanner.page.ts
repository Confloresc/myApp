// scanner.page.ts
import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage {

  constructor(private alertController: AlertController, private navCtrl: NavController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'La operación se completó con éxito.',
      backdropDismiss: false, // Evita que la alarma se cierre haciendo clic fuera de ella
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.goToLoginPage(); // Redirige a la página de inicio de sesión al hacer clic en OK
          }
        }
      ]
    });

    await alert.present();
  }

  goToLoginPage() {
    // Utiliza NavController para navegar a la página de login
    this.navCtrl.navigateForward('/login'); // Asegúrate de que '/login' sea la ruta correcta a tu página de login
  }
}
