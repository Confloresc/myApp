import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-codigoqr',
  templateUrl: './codigoqr.page.html',
  styleUrls: ['./codigoqr.page.scss'],
})

export class CodigoqrPage implements OnInit {
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
