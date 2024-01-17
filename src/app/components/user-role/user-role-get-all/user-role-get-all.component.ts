import { Component, TemplateRef } from '@angular/core';
import { userRole } from 'src/app/models/UserRole/userRole';
import { UserRoleService } from 'src/app/services/user-role.service';

@Component({
  selector: 'app-user-role-get-all',
  templateUrl: './user-role-get-all.component.html',
  styleUrls: ['./user-role-get-all.component.css']
})
export class UserRoleGetAllComponent {
  userRoles? : userRole[];

  display : boolean = false;

  displayPopup() : void{
    this.display = !this.display;
  }

  constructor(private userRoleService : UserRoleService) {}

  ngOnInit()
  {
    this.userRolesGetAll();
  }

  userRolesGetAll() : void
  {
    this.userRoleService.getUserRoles().subscribe(userRoles => {this.userRoles = userRoles.userRoles});
  }

  deleteUserRole(userRoleId : number) : void
  {
    this.userRoleService.deleteUserRole(userRoleId).subscribe(userRole => {
      this.userRolesGetAll();
    })
  }
}
