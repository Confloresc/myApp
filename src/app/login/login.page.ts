import { Component } from '@angular/core';
import { Usuario } from 'usuario.model';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  user: Usuario = new Usuario();
  isPasswordValid: boolean = false;
  validEmailPattern: string = '^(profesor@duoc.cl|alumno@duoc.cl)$';

  constructor(private router: Router, private navCtrl: NavController) {}

  validateUser(user: Usuario): boolean {
    if (
      (user.email === 'profesor@duoc.cl' && user.password === 'profesor123') ||
      (user.email === 'alumno@duoc.cl' && user.password === 'alumno123')
    ) {
      return true;
    } else {
      return false;
    }
  }

  validatePassword() {
    if (this.user.email === 'profesor@duoc.cl' && this.user.password === 'profesor123') {
      this.isPasswordValid = true;
    } else if (this.user.email === 'alumno@duoc.cl' && this.user.password === 'alumno123') {
      this.isPasswordValid = true;
    } else {
      this.isPasswordValid = false;
    }
  }

  login() {
    console.log('Iniciando sesión con:', this.user.email, this.user.password);

    if (this.validateUser(this.user)) {
      console.log('Inicio de sesión exitoso');

      // Redirige al usuario a la página adecuada después del inicio de sesión
      if (this.user.email === 'profesor@duoc.cl') {
        this.navCtrl.navigateForward('/menuprof', {
          queryParams: {
            nombre: 'Luis Gonzalez',
            correoElectronico: this.user.email,
          },
        });

      } else {
        // Redirige a la página predeterminada (por ejemplo, scanner) con los mismos datos
        this.navCtrl.navigateForward('/scanner', {
          queryParams: {
            nombre: 'Laura Mejia',
            correoElectronico: this.user.email,
          },
        });
      }
    } else {
      console.log('Credenciales incorrectas');
    }
  }
}