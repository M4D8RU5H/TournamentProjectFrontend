import { Component, OnInit, Input } from '@angular/core';
import { teamGet } from 'src/app/models/Team/teamResponse';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-tournament-get-single-teams',
  templateUrl: './tournament-get-single-teams.component.html',
  styleUrls: ['./tournament-get-single-teams.component.css']
})
export class TournamentGetSingleTeamsComponent {

  @Input() id: number = 0;

  teams?: teamGet[];

  constructor(private teamService: TeamService)
  { }

  ngOnInit() : void{
    this.getTournamentTeams();
  }

  getTournamentTeams()
  {
    this.teamService.getLinkedTournamentTeams(this.id).subscribe(team => {this.teams = team.teams; console.log(this.teams)})
  }
}
