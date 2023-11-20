import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://24tpg1hl-8000.brs.devtunnels.ms/';
  private userEmail: string | undefined;

  setUserEmail(email: string) {
    this.userEmail = email;
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}login`, { email, password }, { withCredentials: true });
  }

  // Método para cerrar sesión
  logout() {
    // Implementa la lógica para cerrar la sesión aquí (por ejemplo, eliminar tokens, etc.).
  }

  isAuthenticatedUser(): Observable<boolean> {
    if (this.userEmail) {
      const encodedEmail = encodeURIComponent(this.userEmail);
      return this.http.get<{ user_type: string }>(`${this.apiUrl}authenticate?email=${encodedEmail}`, { withCredentials: true }).pipe(
        map((response) => {
          this.handleUserType(response.user_type);
          return true;
        }),
        catchError((error) => {
          this.handleUserType(null);
          return of(false);
        })
      );
    } else {
      return of(false);
    }
  }

  private handleUserType(userType: string | null) {
    // Implementa la lógica para manejar el tipo de usuario (por ejemplo, redirigir a diferentes rutas).
    // Aquí puedes actualizar la lógica según tus necesidades.
    if (userType === 'profesor') {
      // Redirige a la ruta del profesor
    } else if (userType === 'alumno') {
      // Redirige a la ruta del alumno
    } else {
      // Maneja otros casos si es necesario
    }
  }

  // Define el método get_user_info que recibe el correo electrónico como argumento
  get_user_info(email: string): Observable<any> {
    const url = `${this.apiUrl}users/${encodeURIComponent(email)}`;
    return this.http.get(url);
  }
}