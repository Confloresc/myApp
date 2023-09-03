import { Component } from '@angular/core';
import { Usuario } from 'usuario.model'; // Importa la clase Usuario

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  user: Usuario = new Usuario(); // Usuario por defecto vacío

  isPasswordValid: boolean = false; // Variable para validar la contraseña
  validEmailPattern: string = '^(profesor@duoc.cl|alumno@duoc.cl)$'; // Define el patrón de correo electrónico válido

  constructor() {}

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
    // Esta función se llama cuando se cambia la contraseña
    if (this.user.email === 'profesor@duoc.cl' && this.user.password === 'profesor123') {
      this.isPasswordValid = true;
    } else if (this.user.email === 'alumno@duoc.cl' && this.user.password === 'alumno123') {
      this.isPasswordValid = true;
    } else {
      this.isPasswordValid = false;
    }
  }

  login() {
    // Implementa la lógica de autenticación
    console.log('Iniciando sesión con:', this.user.email, this.user.password);

    if (this.validateUser(this.user)) {
      console.log('Inicio de sesión exitoso');
      // Redirige al usuario a la página adecuada después del inicio de sesión
    } else {
      console.log('Credenciales incorrectas');
    }
  }
}
