import { Component } from '@angular/core';
import { DatabaseService } from './tu-ruta-hacia-database-service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  user = {
    email: '',
    password: '',
  };

  validEmailPattern: string = '^(p@duoc.cl|a@duoc.cl)';
  isPasswordValid: boolean = false;

  constructor(private databaseService: DatabaseService, private navCtrl: NavController) {}

  validatePassword() {
    // Agrega aquí la lógica para validar la contraseña
  }

  async login() {
    const { email, password } = this.user;

    // Realiza una consulta SQL para verificar las credenciales del usuario en la base de datos
    const query = 'SELECT * FROM Profesores WHERE CorreoElectronico = ? AND Contrasena = ?';
    const params = [email, password];

    this.databaseService.getDatabaseState().subscribe(async (ready) => {
      if (ready) {
        try {
          const result = await this.databaseService.database.executeSql(query, params);
          if (result.rows.length > 0) {
            // Inicio de sesión exitoso, el usuario existe en la base de datos
            this.navCtrl.navigateForward('/scanner'); // Redirige a la página de destino
          } else {
            // Las credenciales son incorrectas
            console.log('Credenciales incorrectas');
          }
        } catch (error) {
          console.error('Error al consultar la base de datos', error);
        }
      }
    });
  }
}
