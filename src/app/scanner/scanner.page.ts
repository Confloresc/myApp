
// scanner.page.ts
import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})


export class ScannerPage {
  nombre: string | undefined;
  correoElectronico: string | undefined;

  constructor(
    private alertController: AlertController,
    private navCtrl: NavController,
    private route: ActivatedRoute 
  ) {}

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
    this.navCtrl.navigateBack('/login');}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.nombre = params['nombre'];
      this.correoElectronico = params['correoElectronico'];
    });
  }

}


