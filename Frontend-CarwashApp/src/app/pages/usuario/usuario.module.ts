import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UsuarioPageRoutingModule } from './usuario-routing.module';
import { ExploreContainerModule } from '../../components/explore-container.module';

import { UsuarioPage } from './usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerModule,
    RouterModule.forChild([{ path: '', component: UsuarioPage }]),
    UsuarioPageRoutingModule
  ],
  declarations: [UsuarioPage]
})
export class UsuarioPageModule {}
