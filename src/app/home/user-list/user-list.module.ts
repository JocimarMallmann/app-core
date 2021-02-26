import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListComponent } from './user-list.component';
import { ButtonModule } from 'src/app/shared/components/button/button.module';


@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    UserListComponent
  ]
})
export class UserListModule { }
