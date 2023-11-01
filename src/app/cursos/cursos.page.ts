import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})

export class CursosPage implements OnInit {
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
  
    
  goToCursosPage() {
      

    this.navCtrl.back();

  }

  verDetallesAsistencia(seccion: any) {
    // Puedes redirigir a una página de detalles y pasar la información de la sección
    this.router.navigate(['/detalles-seccion'], { state: { seccion } });

  }
  
  

}

