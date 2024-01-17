import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { user } from 'src/app/models/User/user';
@Component({
  selector: 'app-user-get-all',
  templateUrl: './user-get-all.component.html',
  styleUrls: ['./user-get-all.component.css']
})
export class UserGetAllComponent implements OnInit {

  users? : user[];

  showLoading = true;

  phrase : string = "";

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.getAllUsers();

    setTimeout(() => {
      this.showLoading = false;
    }, 15000);
  }

  getAllUsers()
  {
    this.userService.getUsers().subscribe(users => {this.users = users.users;
    this.showLoading = false;});
  }

  searchUser()
  {
    this.userService
      .getUsersByUsername({phrase : this.phrase})
      .subscribe(users => {this.users = users.users});
  }
}
