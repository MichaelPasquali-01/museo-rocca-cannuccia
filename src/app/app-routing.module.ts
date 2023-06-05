import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'dettagliOpera',
    loadChildren: () => import('./pages/dettagli-opera/dettagli-opera.module').then(m => m.DettagliOperaPageModule)
  },
  {
    path: 'guestbook',
    loadChildren: () => import('./pages/guestbook/guestbook.module').then(m => m.GuestbookPageModule)
  },
  {
    path: 'mappa',
    loadChildren: () =>{
      console.log('Navigating to mappa page');
      return import('./pages/mappa/mappa.module').then(m => m.MappaModule);
    }
  },
  {
    path: 'preferiti',
    loadChildren: () => import('./pages/preferiti/preferiti.module').then(m => m.PreferitiPageModule)
  },
  {
    path: 'scansione',
    loadChildren: () => import('./pages/scansione/scansione.module').then(m => m.ScansionePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  },
  {
    path: 'artista',
    loadChildren: () => import('./pages/artista/artista.module').then( m => m.ArtistaModule)
  },
  {
    path: 'dettagli-opera',
    loadChildren: () => import('./pages/dettagli-opera/dettagli-opera.module').then(m => m.DettagliOperaPageModule)
  },
  {
    path: 'guestbook',
    loadChildren: () => import('./pages/guestbook/guestbook.module').then( m => m.GuestbookPageModule)
  },
  {
    path: 'preferiti',
    loadChildren: () => import('./pages/preferiti/preferiti.module').then( m => m.PreferitiPageModule)
  },
  {
    path: 'scansione',
    loadChildren: () => import('./pages/scansione/scansione.module').then( m => m.ScansionePageModule)
  },
  {
    path: 'guestbook-form',
    loadChildren: () => import('./pages/guestbook-form/guestbook-form.module').then( m => m.GuestbookFormPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
