import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersPageRoutingModule } from './users-page-routing.module';
import { UsersPageComponent } from './users-page.component';
import { UsersCommonModule } from '../users-common/users-common.module';
import { UserPageComponent } from './components/user-page/user-page.component';


@NgModule({
  declarations: [
    UsersPageComponent,
    UserPageComponent
  ],
  imports: [
    CommonModule,
    UsersPageRoutingModule,
    UsersCommonModule,
  ]
})
export class UsersPageModule { }
