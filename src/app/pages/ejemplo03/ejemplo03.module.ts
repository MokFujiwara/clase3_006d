import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejemplo03PageRoutingModule } from './ejemplo03-routing.module';

import { Ejemplo03Page } from './ejemplo03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejemplo03PageRoutingModule
  ],
  declarations: [Ejemplo03Page]
})
export class Ejemplo03PageModule {}
