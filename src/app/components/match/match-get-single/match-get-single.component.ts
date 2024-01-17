import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { match } from 'src/app/models/Match/match';
import { MatchService } from 'src/app/services/match.service';
import { TeamService } from 'src/app/services/team.service';
@Component({
  selector: 'app-match-get-single',
  templateUrl: './match-get-single.component.html',
  styleUrls: ['./match-get-single.component.css']
})
export class MatchGetSingleComponent implements OnInit {

  match?: match;

  id: number = 0;
  firstTeamId: number =0;

  constructor(private matchService: MatchService, private teamService: TeamService,  private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id  = Number(this.route.snapshot.paramMap.get('id'));

    this.getSingleMatch(); 

  }

  getSingleMatch() : void
  {
    this.matchService.getMatch(this.id).subscribe(match => {this.match = match.match});
  }

  updateWinnersId(newWinnersId: number): void {
    if (this.match) {
      this.match.winnerId = newWinnersId;
      this.matchService.updateMatch(this.id,this.match).subscribe(updatedMatch => {
        console.log('Match updated successfully:', updatedMatch);
      });
    }
  }


}
