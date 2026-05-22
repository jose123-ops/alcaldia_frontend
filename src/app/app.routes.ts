import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page')
      .then(m => m.LoginPage)
  },

  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.page')
      .then(m => m.DashboardPage)
  },
  {
    path: 'activos-fijo',
    loadComponent: () => import('./pages/activos-fijo/activos-fijo.page').then( m => m.ActivosFijoPage)
  }

];