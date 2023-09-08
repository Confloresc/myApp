import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})

export class CursosPage implements OnInit {
  alertButtons: string[] = [];

  constructor(private alertController: AlertController, private navCtrl: NavController) { }

  async presentAlert() {
    const alert = await this.alertController.create({

    });

    await alert.present();

  }

  goToMenuprofPage() {
    
    this.navCtrl.back();
  }



  ngOnInit() {

  }
}
