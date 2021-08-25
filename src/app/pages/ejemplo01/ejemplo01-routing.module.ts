import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejemplo01Page } from './ejemplo01.page';

const routes: Routes = [
  {
    path: '',
    component: Ejemplo01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejemplo01PageRoutingModule {}
