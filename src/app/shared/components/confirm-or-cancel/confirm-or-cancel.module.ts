import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmOrCancelComponent } from './confirm-or-cancel.component';


@NgModule({
  declarations: [
    ConfirmOrCancelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ConfirmOrCancelComponent
  ]
})
export class ConfirmOrCancelModule { }
