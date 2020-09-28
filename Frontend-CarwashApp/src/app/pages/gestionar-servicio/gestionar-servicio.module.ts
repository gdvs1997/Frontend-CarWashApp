import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionarServicioPageRoutingModule } from './gestionar-servicio-routing.module';

import { GestionarServicioPage } from './gestionar-servicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionarServicioPageRoutingModule
  ],
  declarations: [GestionarServicioPage]
})
export class GestionarServicioPageModule {}
