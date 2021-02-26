import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';

import { UserListService } from './user-list/user-list.service';

@Component({
  selector: 'miau-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: User[];

  constructor(private userListService: UserListService) { }

  ngOnInit(): void {
    this.userListService.userList()
      .subscribe((users) => {

        this.users = users;
        console.log(this.users)
      }, (err) => {

        console.log(err);
      })
      console.log(this.users)
  }

}
