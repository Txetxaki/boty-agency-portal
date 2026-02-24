import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./app.component').then(m => m.AppComponent) 
  },
  { 
    path: 'practica', 
    loadComponent: () => import('./pages/actividades/practica.component').then(m => m.PracticaComponent) 
  },
  { 
    path: 'bienestar', 
    loadComponent: () => import('./pages/actividades/bienestar.component').then(m => m.BienestarComponent) 
  },
  { 
    path: 'horarios', 
    loadComponent: () => import('./pages/horarios/horarios.component').then(m => m.HorariosComponent) 
  },
  { 
    path: 'contacto', 
    loadComponent: () => import('./pages/contacto/contacto.component').then(m => m.ContactoComponent) 
  }
];
