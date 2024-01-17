import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login-switch',
  templateUrl: './user-login-switch.component.html',
  styleUrls: ['./user-login-switch.component.css']
})
export class UserLoginSwitchComponent {
  case: boolean = true;

  switch()
  {
    this.case = !this.case;
  }
}
