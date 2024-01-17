import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { UserLoginSwitchComponent } from './components/user/user-login-switch/user-login-switch.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TournamentProject';

  loggedUserId? : number;
  loggedUserName? : string;
  
  public isButtonVisible = false;
  email: string = '';
  password: string = '';

  constructor(public dialog: MatDialog)
  {}

  ngOnInit()
  {
    let userId = localStorage.getItem('LoggedUserId');

    if(userId)
    {
       this.loggedUserId = parseInt(userId);
    }

    let userName = localStorage.getItem('LoggedUserName');

    if(userName)
    {
      this.loggedUserName = userName;
    }
    else
    {
      this.isButtonVisible = true;
    }
  }

  logOut() : void
  {
    localStorage.removeItem('LoggedUserId')
    localStorage.removeItem('LoggedUserName')

    window.location.reload();
  }

  openDialogLogin(): void {
    const dialogRef = this.dialog.open(UserLoginSwitchComponent, {
      width: '500px',
      height: '750px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.email = result.email;
      this.password = result.password;
    });
  }
}
