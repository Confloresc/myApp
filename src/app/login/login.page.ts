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
        console.log('Login response:', response);
  
        if (response && response.success) {
          const userEmailAddress = this.email;
          this.authService.setUserEmail(userEmailAddress);
  
          if (response.user_type === 'profesor') {
            console.log('Redirigiendo a /menuprof');
            this.router.navigate(['/menuprof'], {
              queryParams: { email: this.email }
            });
          } else if (response.user_type === 'alumno') {
            console.log('Redirigiendo a /scanner');
            this.router.navigate(['/scanner'], {
              queryParams: { email: this.email }
            });
          } else {
            console.error('Tipo de usuario no reconocido:', response.user_type);
            // Manejar el caso en que el tipo de usuario no es 'profesor' ni 'alumno'
          }
        } else {
          console.error('Inicio de sesión fallido. Respuesta del servidor:', response);
          // Manejar el caso en que response.success no está presente o es false
        }
      },
      error: (error: any) => {
        console.error('Error during login:', error);
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
