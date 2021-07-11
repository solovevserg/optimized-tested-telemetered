import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../../shared/models/users/user';
import { UsersService } from '../services/users.service';

@Pipe({
  name: 'userById'
})
export class UserByIdPipe implements PipeTransform {

  constructor(
    private readonly users: UsersService,
  ) {}

  public async transform(id: number | undefined) {
    if(!id) {
      return undefined;
    }
    return this.users.getUser(id);
  }

}
