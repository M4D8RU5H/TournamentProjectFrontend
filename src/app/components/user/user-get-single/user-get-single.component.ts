import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { playerMatchDetails, playerQueueInfo, user } from 'src/app/models/User/user';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-get-single',
  templateUrl: './user-get-single.component.html',
  styleUrls: ['./user-get-single.component.css']
})
export class UserGetSingleComponent implements OnInit {

  user?: user;
  userMatchHistory?: playerMatchDetails[] = [];
  userQueueInfo?: playerQueueInfo[] = [];

  id: number = 0;

  constructor(
    private userService: UserService,     
    private route: ActivatedRoute, 
    private router: Router ) { }

  ngOnInit(): void {
    this.id  = Number(this.route.snapshot.paramMap.get('id'));
    this.getSingleUser();
    this.getSingleUserDivision();
    this.getUserMatchHistory();
  }

  getSingleUser()
  {
    this.userService.getUser(this.id).subscribe(user => {this.user = user.user});
  }

  getSingleUserDivision()
  {
   this.userService.getUserInGameInformation(this.id).subscribe(userQueueInfo => {this.userQueueInfo = userQueueInfo.playerQueueInfo});
  }

  getUserMatchHistory()
  {
    this.userService.getUserMatchHistory(this.id).subscribe(userMatchHistory => { 
      this.userMatchHistory = userMatchHistory.playerMatchDetails;
       console.log(this.userMatchHistory)});
  }

}
