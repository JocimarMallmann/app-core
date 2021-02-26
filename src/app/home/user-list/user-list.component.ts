import { Component, Input, OnInit } from '@angular/core';
import { Button } from 'src/app/shared/components/button/button';

import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'miau-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() users: User[];

  button: Button = {
    label: 'Button',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
