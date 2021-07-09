import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TownshipModalPageRoutingModule } from './township-modal-routing.module';

import { TownshipModalPage } from './township-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TownshipModalPageRoutingModule
  ],
  declarations: [TownshipModalPage]
})
export class TownshipModalPageModule {}
