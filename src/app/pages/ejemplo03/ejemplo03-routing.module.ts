import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejemplo03Page } from './ejemplo03.page';

const routes: Routes = [
  {
    path: '',
    component: Ejemplo03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejemplo03PageRoutingModule {}
