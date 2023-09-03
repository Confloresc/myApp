import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CursosPage } from './cursos/cursos.page';
import { AsistenciaPage } from './asistencia/asistencia.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'prof-registro-asistencia',
    loadChildren: () => import('./prof-registro-asistencia/prof-registro-asistencia.module').then( m => m.ProfRegistroAsistenciaPageModule)

  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'codigo-qr',
    loadChildren: () => import('./codigo-qr/codigo-qr.module').then( m => m.CodigoQRPageModule)
  },
  {
    path: 'prof-registro-asistencia',
    loadChildren: () => import('./prof-registro-asistencia/prof-registro-asistencia.module').then( m => m.ProfRegistroAsistenciaPageModule)
  },
  {
    path: 'profesor',
    loadChildren: () => import('./profesor/profesor.module').then( m => m.ProfesorPageModule)
  },
  {
    path: 'scanner',
    loadChildren: () => import('./scanner/scanner.module').then( m => m.ScannerPageModule)
  },
   {
    path: 'menuprof',
    loadChildren: () => import('./menuprof/menuprof.module').then( m => m.MenuprofPageModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then( m => m.CursosPageModule)
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },

  { path: 'cursos', component: CursosPage },
  { path: 'asitencia', component: AsistenciaPage }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
