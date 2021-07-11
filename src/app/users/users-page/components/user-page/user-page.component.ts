import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from '../../../../shared/models/users/user';

@Component({
  selector: 'qoollo-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {

  public user$ = this.route.data.pipe(
    map(({ user }) => user as User)
  );

  constructor(
    private readonly route: ActivatedRoute,
  ) { }

}
