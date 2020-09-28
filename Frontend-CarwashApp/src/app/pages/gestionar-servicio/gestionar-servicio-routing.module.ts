import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionarServicioPage } from './gestionar-servicio.page';

const routes: Routes = [
  {
    path: '',
    component: GestionarServicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionarServicioPageRoutingModule {}
