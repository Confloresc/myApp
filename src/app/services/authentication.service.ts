import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isAuthenticated = false;

  constructor(private router: Router) {}

loginAuth(email: string, password: string): boolean  {
  
  if (email === 'profesor@duoc.cl' && password === 'profesor123'){
    this.isAuthenticated = true;
  }else if(email === 'alumno@duoc.cl' && password === 'alumno123'){
    this.isAuthenticated = true;
  }else{
    this.isAuthenticated = false;
  }
    
  return this.isAuthenticated; 
  
  }  


isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  // Método para cerrar sesión
logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }  


}