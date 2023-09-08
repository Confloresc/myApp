import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importa NavController desde '@ionic/angular'

@Component({
  selector: 'app-menuprof',
  templateUrl: './menuprof.page.html',
  styleUrls: ['./menuprof.page.scss'],
})
export class MenuprofPage {

  constructor(private navCtrl: NavController) {} // Inyecta NavController en el constructor

  goToLoginPage() {
    // Utiliza NavController para navegar a la página de login
    this.navCtrl.navigateForward('/login'); // Asegúrate de que '/login' sea la ruta correcta a tu página de login
  }
}
