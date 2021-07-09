import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhoneModalPageRoutingModule } from './phone-modal-routing.module';

import { PhoneModalPage } from './phone-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhoneModalPageRoutingModule
  ],
  declarations: [PhoneModalPage]
})
export class PhoneModalPageModule {}
