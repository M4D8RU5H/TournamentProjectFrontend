import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {

  constructor(private teamService: TeamService) { }
  loggedUserId: number = 0;
  name: string = "";
  teamRatio: number = 0;

  ngOnInit(): void {
  }

  createTeam() : void
  {
    let userId = localStorage.getItem('LoggedUserId');

    if (userId) {
      this.loggedUserId = parseInt(userId);
    }

    this.teamService.createTeam(
      {
        id: 0,
        teamLeaderId: this.loggedUserId,
        name: this.name,
        ratio: this.teamRatio,
      }).subscribe();
  }

}
