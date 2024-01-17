import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  constructor(private UserService: UserService, private router: Router) { }
  id: number = 0;
  login: string = "";
  name: string = "";
  password: string = "";
  roleid: number = 1;
  bannedUntill: string ="2022-11-16T22:28:58.876";
  rank: number = 0;

  ngOnInit(): void {
  }

  createUser() : void
  {
    this.UserService.createUser({
      id:this.id,
      login: this.login,
      name: this.name,
      password: this.password,
      roleId: this.roleid,
      bannedUntill: this.bannedUntill,
      rank: this.rank
    }).subscribe();
    this.router.navigate(['/user-login']);
  }

}
