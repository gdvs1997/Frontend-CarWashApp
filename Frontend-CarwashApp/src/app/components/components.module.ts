import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container/explore-container.component';
import { DetailsInfoComponent } from './details-info/details-info.component';
import { DetailsLocationComponent } from './details-location/details-location.component';
import { DetailsCommentsComponent } from './details-comments/details-comments.component';


@NgModule({
  declarations: [
    ExploreContainerComponent,
    DetailsInfoComponent, 
    DetailsLocationComponent,
    DetailsCommentsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    ExploreContainerComponent,
    DetailsInfoComponent,
    DetailsLocationComponent,
    DetailsCommentsComponent
  ]
})
export class ComponentsModule { }
