import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejemplo02Page } from './ejemplo02.page';

const routes: Routes = [
  {
    path: '',
    component: Ejemplo02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejemplo02PageRoutingModule {}
