import { Component, OnInit } from '@angular/core';
import { UsersServiceHttp } from '@app/components/user/store/services/user.service.http';
import { User } from '@app/components/user/store/model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users: User[];
  constructor(private usersServiceHttp: UsersServiceHttp) {}

  ngOnInit() {
    this.usersServiceHttp.getUsers().subscribe((res) => {
      this.users = res.data;
    });
  }
}
