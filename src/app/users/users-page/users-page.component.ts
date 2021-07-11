import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users-common/services/users.service';

@Component({
  selector: 'qoollo-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent {

  public readonly usersList = this.users.getUsers();

  constructor(
    private readonly users: UsersService,
  ) { }

}
