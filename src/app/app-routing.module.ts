import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'dettagli-opera/:id',
    loadChildren: () => import('./pages/dettagli-opera/dettagli-opera.module').then(m => m.DettagliOperaPageModule)
  },
  {
    path: 'guestbook',
    loadChildren: () => import('./pages/guestbook/guestbook.module').then(m => m.GuestbookPageModule)
  },
  {
    path: 'mappa',
    loadChildren: () =>import('./pages/mappa/mappa.module').then(m => m.MappaModule)
     },
  {
    path: 'preferiti',
    loadChildren: () => import('./pages/preferiti/preferiti.module').then(m => m.PreferitiPageModule)
  },
  {
    path: 'artista/:id',
    loadChildren: () => import('./pages/artista/artista.module').then( m => m.ArtistaModule)
  },
  {
    path: 'guestbookform',
    loadChildren: () => import('./pages/guestbook-form/guestbook-form.module').then( m => m.GuestbookFormPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'stanza',
    loadChildren: () => import('./pages/stanza/stanza.module').then( m => m.StanzaPageModule)
  },
  {
    path: 'scansione',
    loadChildren: () => import('./pages/scansione/scansione.module').then( m => m.ScansionePageModule)
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
    path: 'scansione',
    loadChildren: () => import('./pages/scansione/scansione.module').then( m => m.ScansionePageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
