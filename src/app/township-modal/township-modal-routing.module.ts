import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TownshipModalPage } from './township-modal.page';

const routes: Routes = [
  {
    path: '',
    component: TownshipModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TownshipModalPageRoutingModule {}
