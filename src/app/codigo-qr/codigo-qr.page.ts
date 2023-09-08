import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.page.html',
  styleUrls: ['./codigo-qr.page.scss'],
})

export class CodigoQRPage implements OnInit {
  alertButtons: string[] = [];
  alertController: any;
  
  constructor(private route: ActivatedRoute, alertController: AlertController, private navCtrl: NavController) { }


  id!: number;
  nombre!: string;
  seccion!: string;
  sala!: string;
  horario!: string;

  async presentAlert() {
    const alert = await this.alertController.create({

    });

    await alert.present();
  }

  goToMenuprofPage() {
    
    this.navCtrl.navigateForward('/Menuprof');
  }


  ngOnInit() {
    // Recupera los datos de los queryParams
    this.route.queryParams.subscribe(params => {
    this.id = params['id'];
    this.nombre = params['nombre'];
    this.seccion = params['seccion'];
    this.sala = params['sala'];
    this.horario = params['horario'];
  });
  
}



}



  
