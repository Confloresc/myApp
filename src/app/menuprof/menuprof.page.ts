import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular'; // Asegúrate de importar NavController si aún no lo has hecho.

@Component({
  selector: 'app-menuprof',
  templateUrl: './menuprof.page.html',
  styleUrls: ['./menuprof.page.scss'],
})
export class MenuprofPage implements OnInit {
  nombre: string | undefined;
  correoElectronico: string | undefined;

  constructor(private route: ActivatedRoute, private navCtrl: NavController) {}

  ngOnInit() {
    // Obtener los parámetros pasados desde la página anterior.
    this.route.queryParams.subscribe(params => {
      this.nombre = params['nombre'];
      this.correoElectronico = params['correoElectronico'];

      // Ahora puedes utilizar 'nombre' y 'correoElectronico' como desees en esta página.
    });
  }

  goToMenuprofPage() {
    // Navegar hacia atrás en la historia de navegación
    this.navCtrl.navigateBack('/login'); // Asegúrate de que '/login' sea la ruta correcta a tu página de login

  }

  // Resto de tu código y lógica de la página MenuprofPage
}
