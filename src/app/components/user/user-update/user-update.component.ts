import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  constructor(private UserService: UserService) { }
  id: number = 0;
  login: string = "";
  name: string = "";
  password: string = "";
  roleid: number = 1;
  bannedUntill: string ="";
  rank: number = 0;

  ngOnInit(): void {
  }

  updateUser() : void
  {
    this.UserService.updateUser(
      this.id,
      {
      id:this.id,
      login: this.login,
      name: this.name,
      password: this.password,
      roleId: this.roleid,
      bannedUntill: this.bannedUntill,
      rank: this.rank
    }).subscribe();
  }

}
