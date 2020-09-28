import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarCarwashPageRoutingModule } from './buscar-carwash-routing.module';

import { BuscarCarwashPage } from './buscar-carwash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarCarwashPageRoutingModule
  ],
  declarations: [BuscarCarwashPage]
})
export class BuscarCarwashPageModule {}
