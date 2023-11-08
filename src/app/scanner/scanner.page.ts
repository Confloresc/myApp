import { Component, OnInit } from '@angular/core';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController, NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-scanner',
  templateUrl: 'scanner.page.html',
  styleUrls: ['scanner.page.scss'],
})
export class ScannerPage implements OnInit {
  isSupported = false;
  barcodes: Barcode[] = [];
  router: any;
  nombre: string | undefined;
  apellido: string | undefined;
  email: string | undefined;
  materias: any[] = [];

  constructor(private alertController: AlertController,private authService: AuthenticationService,private route: ActivatedRoute,private navCtrl: NavController,) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.email = params['email'];
      this.nombre = params['nombre'];
      this.apellido = params['apellido'];
      if (this.email) {
        this.authService.get_user_info(this.email).subscribe((userData: any) => {
          if (userData) {
            this.nombre = userData.nombre;
            this.apellido = userData.apellido;
          }
        });
      } else {
        // Maneja el escenario donde this.email es undefined.
      }
    });
  
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
  }

  async scan(): Promise<void> {
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert();
      return;
    }
  
    const barcodes = await BarcodeScanner.scan();
    this.router.navigateByUrl('/login');
  }

  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permission denied',
      message: 'Please grant camera permission to use the barcode scanner.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  goToLoginPage() {
    this.router.navigateByUrl('/login');
  }

}