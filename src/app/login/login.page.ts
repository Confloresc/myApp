import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {
  email: string = '';
  password: string = '';
  isPasswordValid: boolean = false; // Agregamos una propiedad para validar la contraseña
  validEmailPattern: RegExp = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  login() {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        if (response.success) {
          this.authService.isAuthenticatedUser(response.email).subscribe((userData: any) => {
            if (userData.user_type === 'profesor') {
              this.router.navigate(['/menuprof']);
            } else if (userData.user_type === 'alumno') {
              this.router.navigate(['/scanner']);
            }
          });
        } else {
          // Muestra un mensaje de error al usuario
        }
      },
      (error) => {
        // Manejar errores (mostrar mensajes de error, etc.).
      }
    );
  }
  validatePassword() {
    // Implementa la lógica para validar la contraseña aquí
    // Puedes usar esta función para establecer el valor de 'isPasswordValid' en true o false
    // en función de si la contraseña cumple con ciertos criterios.
    // Por ejemplo:
    this.isPasswordValid = this.password.length >= 8; // Valida si la contraseña tiene al menos 8 caracteres.
  }
}
