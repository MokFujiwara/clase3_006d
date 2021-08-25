import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejemplo01PageRoutingModule } from './ejemplo01-routing.module';

import { Ejemplo01Page } from './ejemplo01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejemplo01PageRoutingModule
  ],
  declarations: [Ejemplo01Page]
})
export class Ejemplo01PageModule {}
