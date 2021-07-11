import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { User } from '../../../../shared/models/users/user';

@Component({
  selector: 'qoollo-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent implements OnInit {


  @Input()
  public users?: User[]

  constructor() { }

  ngOnInit(): void {
  }

}
