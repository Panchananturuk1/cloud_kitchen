import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCallPage } from './add-call.page';

const routes: Routes = [
  {
    path: '',
    component: AddCallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCallPageRoutingModule {}
