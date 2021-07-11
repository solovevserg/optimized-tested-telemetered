import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { User } from '../../../../shared/models/users/user';

@Component({
  selector: 'qoollo-users-list-card',
  templateUrl: './users-list-card.component.html',
  styleUrls: ['./users-list-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListCardComponent {

  @Input()
  public user?: User;

}
