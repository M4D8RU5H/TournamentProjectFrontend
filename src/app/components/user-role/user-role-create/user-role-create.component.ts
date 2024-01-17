import { Component } from '@angular/core';
import { UserRoleService } from 'src/app/services/user-role.service';

@Component({
  selector: 'app-user-role-create',
  templateUrl: './user-role-create.component.html',
  styleUrls: ['./user-role-create.component.css']
})
export class UserRoleCreateComponent {

  name: string = "";

  constructor(private userRoleService: UserRoleService) { }

  createUserRole(): void {
    this.userRoleService.createUserRole(
      {
        id: 0,
        name: this.name,
      }).subscribe(userRole => {
        window.location.href = 'http://localhost:4200/user-role-get-all';
      }

      );
  }
}
