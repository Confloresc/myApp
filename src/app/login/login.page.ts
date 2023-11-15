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
    const subscription = this.authService.login(this.email, this.password).subscribe({
      next: (response: any) => {
        if (response.success) {
          const userEmailAddress = this.email;
          this.authService.setUserEmail(userEmailAddress);
  
          if (response.user_type === 'profesor') {
            this.router.navigate(['/menuprof'], {
              queryParams: {
                email: this.email,
              },
            });
          } else if (response.user_type === 'alumno') {
            this.router.navigate(['/scanner'], {
              queryParams: {
                email: this.email,
              },
            });
          }
        } else {
          // Muestra un mensaje de error al usuario
        }
      },
      error: (error: any) => {
        // Manejar errores (mostrar mensajes de error, etc.).
      }
    });

  }
  
  validatePassword() {
    // Implementa la lógica para validar la contraseña aquí
    // Puedes usar esta función para establecer el valor de 'isPasswordValid' en true o false
    // en función de si la contraseña cumple con ciertos criterios.
    // Por ejemplo:
    this.isPasswordValid = this.password.length >= 8; // Valida si la contraseña tiene al menos 8 caracteres.
  }
}
