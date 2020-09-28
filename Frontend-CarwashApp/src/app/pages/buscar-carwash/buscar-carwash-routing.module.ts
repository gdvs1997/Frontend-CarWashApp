import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarCarwashPage } from './buscar-carwash.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarCarwashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarCarwashPageRoutingModule {}
