import { Injectable } from '@angular/core';
import { memoize } from 'memoize-cache-decorator';
import { ApiService } from '../../../core/services/api.service';
import { User } from '../../../shared/models/users/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private readonly api: ApiService,
  ) { }

  private users?: Map<number, User>;

  private async loadAllUsers() {
    if(!this.users) {
      const users = await this.api.getUsers().toPromise();
      this.users = new Map(users.map(u => [u.id, u]));
    }
  }

  @memoize()
  public async getUsers(query?: string): Promise<User[]> {

    if(!query) {
      await this.loadAllUsers();
    }

    if (this.users) {
      return [...this.users.values()];
    }

    const foundUsers = await this.api.getUsers(query).toPromise();
    return foundUsers;
  }

  @memoize()
  public async getUser(id: number): Promise<User | undefined> {

    const localUser = this.users?.get(id);
    if (localUser) {
      return localUser;
    }

    await this.loadAllUsers();
    return this.users?.get(id);
  }

}
