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

    });

    await alert.present();
  }

  goToMenuprofPage() {
    
    this.navCtrl.navigateForward('/Menuprof');
  }

  ngOnInit() {

  }
}
