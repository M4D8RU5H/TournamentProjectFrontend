import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  id: number = 0;
  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }

  deleteUser() : void
  {
    this.userService.deleteUser(this.id).subscribe();
  }
}
