import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import { User } from 'src/app/shared/models/user';

const API = environment.api;

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private http: HttpClient) { }

  userList(): Observable<User[]> {

    return this.http.get<User[]>(`${API}/users`);
  }

}
