import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../../../shared/models/users/user';
import { UsersService } from '../../users-common/services/users.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User | undefined> {

  constructor(
    private readonly users: UsersService,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<User | undefined> {

    const userId = Number(route.params.id);

    if(userId === NaN) {
      throw new Error('User id must be provided to resolver.');
    }

    return this.users.getUser(userId);
  }

}
