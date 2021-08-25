import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejemplo02PageRoutingModule } from './ejemplo02-routing.module';

import { Ejemplo02Page } from './ejemplo02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejemplo02PageRoutingModule
  ],
  declarations: [Ejemplo02Page]
})
export class Ejemplo02PageModule {}
