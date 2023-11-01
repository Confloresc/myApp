import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(): boolean {
    const email = 'example@example.com'; // Reemplaza esto con el email del usuario autenticado o cómo obtienes el email del usuario
    const isAuthenticated = this.authService.isAuthenticatedUser(email);

    if (!isAuthenticated) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
