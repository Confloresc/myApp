import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

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
    // Obtener los parámetros pasados desde la página anterior usando queryParams.
    this.route.queryParams.subscribe(params => {
      this.nombre = params['nombre'];
      this.correoElectronico = params['correoElectronico'];

    });
  }

  navigateAsistencia() {
    // Verifica si tienes datos válidos antes de navegar.
    if (this.nombre && this.correoElectronico) {
      this.navCtrl.navigateForward('/prof-registro-asistencia', {
        queryParams: {
          nombre: this.nombre,
          correoElectronico: this.correoElectronico,
        },
      });
    } else {
      // Puedes manejar un escenario donde los datos no están disponibles.
      console.error('Faltan datos de usuario para navegar a prof-registro-asistencia');
    }
  }

  navigateAsistenciareg() {
    // Verifica si tienes datos válidos antes de navegar.
    if (this.nombre && this.correoElectronico) {
      this.navCtrl.navigateForward('/cursos', {
        queryParams: {
          nombre: this.nombre,
          correoElectronico: this.correoElectronico,
        },
      });
    } else {
      // Puedes manejar un escenario donde los datos no están disponibles.
      console.error('Faltan datos de usuario para navegar a prof-registro-asistencia');
    }
  }
  goToMenuprofPage() {

    // Navegar hacia atrás en la historia de navegación
    this.navCtrl.navigateForward('/login');


  }
}
