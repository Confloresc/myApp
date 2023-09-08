import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  constructor(private navCtrl: NavController) {} // Inyecta NavController en el constructor

  goToLoginPage() {
    // Utiliza NavController para navegar a la página de login
    this.navCtrl.navigateForward('/menuprof'); // Asegúrate de que '/login' sea la ruta correcta a tu página de login
  }

  ngOnInit() {
  }

}
