import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserLoginSwitchComponent } from '../../user/user-login-switch/user-login-switch.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public dataList = [
    {
    id: "2",
    name: 'Tournament',
    toggle: false,
    iconName: 'fa fa-trophy',
    routingPath: 'tournament-home'
  },
  {
    id: "3",
    name: 'Team',
    toggle: false,
    iconName: 'fa fa-gamepad',
    routingPath: 'team-get-all'
  },
  {
    id: "4",
    name: 'Users',
    toggle: false,
    iconName: 'fa fa-user',
    routingPath: 'user-get-all'
  },
  {
    id: "5",
    name: 'Report',
    toggle: false,
    iconName: 'fa fa-gamepad',
    routingPath: 'report-get-all'
  },
  {
    id: "6",
    name: 'Post',
    toggle: false,
    iconName: 'fa fa-gamepad',
    routingPath: 'post-get-all'
  },
  {
    id: "7",
    name: 'UserRole',
    toggle: false,
    iconName: 'fa fa-gamepad',
    routingPath: 'user-role-get-all'
  }]

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void 
  {

  }

  events: string[] = [];
  opened?: boolean;

  shouldRun = true;


}
