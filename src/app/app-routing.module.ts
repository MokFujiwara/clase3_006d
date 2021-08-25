import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ejemplo01',
    loadChildren: () => import('./pages/ejemplo01/ejemplo01.module').then( m => m.Ejemplo01PageModule)
  },
  {
    path: 'ejemplo02',
    loadChildren: () => import('./pages/ejemplo02/ejemplo02.module').then( m => m.Ejemplo02PageModule)
  },
  {
    path: 'ejemplo03',
    loadChildren: () => import('./pages/ejemplo03/ejemplo03.module').then( m => m.Ejemplo03PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
