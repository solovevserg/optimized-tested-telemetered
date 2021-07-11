import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListCardComponent } from './components/users-list-card/users-list-card.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { MaterialProxyModule } from '../../material-proxy/material-proxy.module';
import { UserByIdPipe } from './pipes/user-by-id.pipe';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UsersListCardComponent,
    UsersListComponent,
    UserByIdPipe
  ],
  imports: [
    CommonModule,
    MaterialProxyModule,
    RouterModule,
  ],
  exports: [
    UsersListCardComponent,
    UsersListComponent,
    UserByIdPipe,
  ],
})
export class UsersCommonModule { }
