import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-menuprof',
  templateUrl: './menuprof.page.html',
  styleUrls: ['./menuprof.page.scss'],
})

export class MenuprofPage implements OnInit {
  nombre: string | undefined;
  apellido: string | undefined;
  email: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private authService: AuthenticationService
  ) {}

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
  }

  
  navigateAsistencia() {
    // Navega a la página de registro de asistencia
    this.navCtrl.navigateForward('/prof-registro-asistencia', {
      queryParams: {
        nombre: this.nombre,
        apellido: this.apellido,
        email: this.email,
      },
    });
  }

  navigateAsistenciareg() {
    // Navega a la página de cursos o a donde desees
    this.navCtrl.navigateForward('/cursos', {
      queryParams: {
        nombre: this.nombre,
        apellido: this.apellido,
        email: this.email,
      },
    });
  }

  goToMenuprofPage() {
    // Navega hacia atrás en la historia de navegación o a la página de inicio de sesión
    this.navCtrl.navigateBack('/login');
  }

  logout() {
    // Utiliza el servicio de autenticación para cerrar la sesión
    this.authService.logout();
  }
}
