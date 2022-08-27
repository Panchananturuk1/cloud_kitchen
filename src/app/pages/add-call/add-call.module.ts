import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCallPageRoutingModule } from './add-call-routing.module';

import { AddCallPage } from './add-call.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCallPageRoutingModule
  ],
  declarations: [AddCallPage]
})
export class AddCallPageModule {}
