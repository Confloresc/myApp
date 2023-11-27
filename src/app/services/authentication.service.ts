import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://13.51.201.225';
  private userEmail: string | undefined;

  setUserEmail(email: string) {
    this.userEmail = email;
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password });
  }

  // Método para cerrar sesión
  logout() {
    // Implementa la lógica para cerrar la sesión aquí (por ejemplo, eliminar tokens, etc.).
  }

  isAuthenticatedUser(): Observable<boolean> {
    if (this.userEmail) {
      return this.http.get<{ isAuthenticated: boolean }>(`${this.apiUrl}/authenticate?email=${this.userEmail}`).pipe(
        map((response) => response.isAuthenticated),
        catchError((error) => of(false))
      );
    } else {
      return of(false); // El usuario no ha iniciado sesión, por lo tanto, no está autenticado.
    }
  }

  // Define el método get_user_info que recibe el correo electrónico como argumento
  get_user_info(email: string): Observable<any> {
    const url = `${this.apiUrl}users/${encodeURIComponent(email)}`;
    return this.http.get(url);
  }
}
