import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageRoutingModule } from './message-routing.module';
import { MessageComponent } from './message.component';
import { SharedModule } from '../../shared.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    MessageComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    MessageRoutingModule,
    SharedModule
  ]
})
export class MessageModule { }
