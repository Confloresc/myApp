import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'prof-registro-asistencia',
    loadChildren: () => import('./prof-registro-asistencia/prof-registro-asistencia.module').then(m => m.ProfRegistroAsistenciaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'codigo-qr',
    loadChildren: () => import('./codigo-qr/codigo-qr.module').then(m => m.CodigoQRPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'prof-registro-asistencia',
    loadChildren: () => import('./prof-registro-asistencia/prof-registro-asistencia.module').then(m => m.ProfRegistroAsistenciaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'profesor',
    loadChildren: () => import('./profesor/profesor.module').then(m => m.ProfesorPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'scanner',
    loadChildren: () => import('./scanner/scanner.module').then(m => m.ScannerPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'menuprof',
    loadChildren: () => import('./menuprof/menuprof.module').then(m => m.MenuprofPageModule),
    canActivate: [AuthGuard],
    data: { debugInfo: 'Menuprof Route' } 
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./asistencia/asistencia.module').then(m => m.AsistenciaPageModule),
    canActivate: [AuthGuard]
  },

  {
    path: 'not-found',
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundPageModule)
  },
  { path: '**', redirectTo: 'not-found' } // Ruta de "catch-all" redirige a la página de not-found
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
