import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate() {
    return this.authService.isAuthenticatedUser().pipe(
      map((isAuthenticated) => {
        if (isAuthenticated) {
          return true; // Usuario autenticado, permite la navegación.
        } else {
          this.router.navigate(['/login']);
          return false; // Usuario no autenticado, no permite la navegación.
        }
      })
    );
  }
}
