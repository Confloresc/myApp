import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-prof-registro-asistencia',
  templateUrl: './prof-registro-asistencia.page.html',
  styleUrls: ['./prof-registro-asistencia.page.scss'],
})

export class ProfRegistroAsistenciaPage implements OnInit {
  alertButtons: string[] = [];
  nombre: string | undefined;
  apellido: string | undefined;
  email: string | undefined;
  materias: any[] = [];

constructor(  private router: Router,
  private alertController: AlertController,
  private navCtrl: NavController,
  private route: ActivatedRoute,
  private authService: AuthenticationService) { }

  objetos = [
    { id: 1, nombre: 'Portafolio', seccion:'010V', sala:'F210',horario:'19:00 a 20:20' },
    { id: 2, nombre: 'Base de datos', seccion:'014V', sala:'V108',horario:'20:30 a 21:20' },
    { id: 3, nombre: 'Programación APP', seccion:'009V', sala:'T504',horario:'21:21 a 22:30' }
  ];

  async presentAlert() {
    const alert = await this.alertController.create({

    });

    await alert.present();

  }


    ngOnInit() {
      this.route.queryParams.subscribe((params) => {
        this.email = params['email'];
        this.nombre = params['nombre'];
        this.apellido = params['apellido'];
        const email = params['email'];
        if (email) {
          this.authService.get_user_info(email).subscribe((userData: any) => {
            if (userData && userData.materias) {
              this.materias = userData.materias;
            }
          });
        }
      });
    }
  
    
  navegarADetalle(id: number, nombre: string, seccion: string, sala: string, horario: string) {
    // Navega a la página de detalle y pasa el id y el nombre como queryParams
    this.router.navigate(['/codigo-qr'], {
      queryParams: {
        id: id,
        nombre: nombre,
        seccion: seccion,
        sala: sala,
        horario: horario,
      }
    });

  }
  goToCursosPage() {
      

    this.navCtrl.back();

  }

  verDetallesSeccion(seccion: any) {
    // Puedes redirigir a una página de detalles y pasar la información de la sección
    this.router.navigate(['/detalles-seccion'], { state: { seccion } });

  }
  
  

}




