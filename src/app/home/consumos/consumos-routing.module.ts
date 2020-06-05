import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsumosPage } from './consumos.page';

const routes: Routes = [
  {
    path: '',
    component: ConsumosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsumosPageRoutingModule {}
