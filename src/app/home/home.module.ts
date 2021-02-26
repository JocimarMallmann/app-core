import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { HomeComponent } from './home.component';
import { UserListModule } from './user-list/user-list.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    UserListModule,
    HttpClientModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
