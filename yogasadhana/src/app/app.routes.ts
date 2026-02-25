import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./app.component').then(m => m.AppComponent) 
  },
  { 
    path: 'hatha', 
    loadComponent: () => import('./pages/actividades/hatha.component').then(m => m.HathaComponent) 
  },
  { 
    path: 'unnata', 
    loadComponent: () => import('./pages/actividades/unnata.component').then(m => m.UnnataComponent) 
  },
  { 
    path: 'bienestar', 
    loadComponent: () => import('./pages/actividades/bienestar.component').then(m => m.BienestarComponent) 
  },
  { 
    path: 'lomi-lomi', 
    loadComponent: () => import('./pages/masajes/lomi-lomi.component').then(m => m.LomiLomiComponent) 
  },
  { 
    path: 'quiromasaje', 
    loadComponent: () => import('./pages/masajes/quiromasaje.component').then(m => m.QuiromasajeComponent) 
  },
  { 
    path: 'osteopatia', 
    loadComponent: () => import('./pages/masajes/osteopatia.component').then(m => m.OsteopatiaComponent) 
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
