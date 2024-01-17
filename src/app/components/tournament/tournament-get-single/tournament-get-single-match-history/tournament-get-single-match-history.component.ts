import { Component, OnInit, Input } from '@angular/core';
import { match } from 'src/app/models/Match/match';
import { teamGet } from 'src/app/models/Team/teamResponse';
import { MatchService } from 'src/app/services/match.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-tournament-get-single-match-history',
  templateUrl: './tournament-get-single-match-history.component.html',
  styleUrls: ['./tournament-get-single-match-history.component.css']
})
export class TournamentGetSingleMatchHistoryComponent {
  
  @Input() id: number = 0;

  matches?: match[];

  constructor(private matchService: MatchService)
  { }

  ngOnInit() : void{
    this.getTournamentMatches();
  }

  getTournamentMatches()
  {
    this.matchService.getMatches(this.id).subscribe(match => { this.matches = match.matches })
  }

  getPhaseName(phase: number): string {
    switch (phase) {
      case 6:
        return "1/32";
      case 5:
        return "1/16";
      case 4:
        return "1/8";
      case 3:
        return "quarter finals";
      case 2:
        return "semi-finals";
      case 1:
        return "grand-final";
      default:
        return "";
    }
  }
  
  getWinnerName(match: match): string {
    let teamName: string;
  
    if (match.winnerId === match.firstTeamId) {
      teamName = match.firstTeamName;
    } else if (match.winnerId === match.secondTeamId) {
      teamName = match.secondTeamName;
    } else {
      return "";
    }
  
    return teamName ? teamName : "";
  }
}
