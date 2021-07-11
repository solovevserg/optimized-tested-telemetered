import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../shared/models/users/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  public getUsers(query?: string) {
    const url = 'https://sdal.pw/api/cdc/users';

    let params = new HttpParams();

    if(query) {
      params = params.appendAll({query});
    }

    return this.http.get<User[]>(url, {
      params,
    });
  }

}
