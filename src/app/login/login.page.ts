import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  user = {
    email: '',
    password: '',
  };

  constructor() {}

  login() {
    // Aquí puedes implementar la lógica de autenticación
    console.log('Iniciando sesión con:', this.user.email, this.user.password);
    // Ejemplo de validación básica
    if (this.user.email === 'usuario@example.com' && this.user.password === 'contraseña') {
      console.log('Inicio de sesión exitoso');
    } else {
      console.log('Credenciales incorrectas');
    }
  }
}