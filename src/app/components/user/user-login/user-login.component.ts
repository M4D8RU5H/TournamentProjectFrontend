import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { userData } from 'src/app/models/Authentication/userData';
import { UserService } from 'src/app/services/user.service';
import { UserCreateComponent } from '../user-create/user-create.component';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  email?: string;
  password?: string;
  error?: string;

  
  userData? : userData;

  constructor(private userService : UserService, public dialog: MatDialog)
  {

  }

  async loginUser() : Promise<void>
  {
    this.error = "";

    if(this.email == null)
    {
      this.error += "Email cannot be null. "
    }

    if(this.password ==  null)
    {
      this.error += "Password cannot be null. "
    }

    if(this.password && this.email)
    {
        this.userService.loginUser(this.email, this.password).subscribe(userData => {          
        this.userData = userData;

        if(this.userData != undefined)
        {
          localStorage.setItem('LoggedUserId', this.userData.id.toString());

          localStorage.setItem('LoggedUserName', this.userData.name);
  
          window.location.href = 'http://localhost:4200';
        }
      });
    }
  }

  openDialogRegister(): void {
    const dialogRef = this.dialog.open(UserCreateComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
