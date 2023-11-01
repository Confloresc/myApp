import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})

export class CursosPage implements OnInit {
  alertButtons: string[] = [];
  nombre: string | undefined;
  correoElectronico: string | undefined;
  curso: any[] = [];

  constructor(private router: Router,private alertController: AlertController, private navCtrl: NavController,private route: ActivatedRoute,private http: HttpClient) { }

  async presentAlert() {
    const alert = await this.alertController.create({

    });

    await alert.present();

  }

  goToMenuprofPage() {
    
    this.navCtrl.back();
  }

  ngOnInit() {
    // Obtener los parámetros pasados desde la página anterior.
    this.route.queryParams.subscribe(params => {
      this.nombre = params['nombre'];
      this.correoElectronico = params['correoElectronico'];
  
      // Construye la URL para la solicitud HTTP, incluyendo 'nombre' y 'correoElectronico'
      const url = `http://127.0.0.1:8000/profesor?nombre=${this.nombre}&correo=${this.correoElectronico}`;
  
      // Realiza una solicitud HTTP GET a tu API para obtener los cursos
      this.http.get(url).subscribe((data: any) => {
        this.curso = data; // Almacena los cursos en la propiedad 'curso'
      });
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
}
