import { Component, inject} from '@angular/core';
import { Usuario } from 'usuario.model';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  user: Usuario = new Usuario();
  isPasswordValid: boolean = false;
  validEmailPattern: string = '^(profesor@duoc.cl|alumno@duoc.cl)$';
  tokenService = inject(AuthenticationService);

  constructor(private router: Router, private navCtrl: NavController) {}

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
    // Llama al método de login del servicio de autenticación
    
    const isAuthenticated = this.tokenService.loginAuth(this.user.email, this.user.password);
   
    if (isAuthenticated) {
      if (this.user.email === 'profesor@duoc.cl') {
        this.navCtrl.navigateForward('/menuprof', {
          queryParams: {
            nombre: 'Luis Gonzalez',
            correoElectronico: this.user.email,
          },
        });
      }else if(this.user.email === 'alumno@duoc.cl'){
        this.navCtrl.navigateForward('/scanner', {
          queryParams: {
            nombre: 'Laura Mejia',
            correoElectronico: this.user.email,
          },
        });
      }
    } else {
      // Las credenciales son incorrectas, muestra un mensaje de error
    }
  
  }
}