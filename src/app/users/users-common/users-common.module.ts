import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListCardComponent } from './components/users-list-card/users-list-card.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { MaterialProxyModule } from '../../material-proxy/material-proxy.module';



@NgModule({
  declarations: [
    UsersListCardComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    MaterialProxyModule,
  ],
  exports: [
    UsersListCardComponent,
    UsersListComponent,
  ],
})
export class UsersCommonModule { }
