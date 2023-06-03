import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'dettagliOpera',
    loadChildren: () => import('./pages/dettagliOpera/opera.module').then(m => m.DettagliOperaModule)
  },
  {
    path:'guestbook',
    loadChildren: () => import('./pages/guestbook/guestbook.module').then(m => m.GuestbookModule)
  },
  {
    path:'mappa',
    loadChildren: () => import('./pages/mappa/mappa.module').then(m => m.MappaModule)
  },
  {
    path:'preferiti',
    loadChildren: () => import('./pages/preferiti/preferiti.module').then(m => m.PreferitiModule)
  },
  {
    path:'scansione',
    loadChildren: () => import('./pages/scansione/scansione.module').then(m => m.ScansioneModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
