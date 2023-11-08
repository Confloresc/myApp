import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  [x: string]: any;
  get_user_info(email: string): Observable<any> {
    const url = `${this.apiUrl}/users/${encodeURIComponent(email)}`;
    return this.http.get(url);
  }


  private apiUrl = 'http://localhost:8000'; // Reemplaza con la URL de tu API FastAPI

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  // Método para cerrar sesión
  logout() {
    // Implementa la lógica para cerrar la sesión aquí (por ejemplo, eliminar tokens, etc.).
  }

  // Método para autenticar al usuario y obtener su tipo (profesor o alumno)
  isAuthenticatedUser(email: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/authenticate?email=${email}`);
  }

  
  // Otros métodos para manejar el estado de autenticación (guardar tokens, comprobar autenticación, etc.).
}
