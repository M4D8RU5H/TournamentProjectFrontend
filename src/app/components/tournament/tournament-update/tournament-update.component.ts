import { Component, OnInit } from '@angular/core';
import { TournamentService } from 'src/app/services/tournament.service';

@Component({
  selector: 'app-tournament-update',
  templateUrl: './tournament-update.component.html',
  styleUrls: ['./tournament-update.component.css']
})
export class TournamentUpdateComponent implements OnInit {

  constructor(private tournamentService : TournamentService) { }

  id: number = 0;
  name: string = "";
  tournamentDate: string = "";
  maxTeamAmount: number = 0;
  description: string = "";
  registrationStarts: string = "";
  registrationEnds: string = "";
  status: number = 0;
  liveTransmisionEmbed: string = "";

  ngOnInit(): void {
  }

  updateTournament() : void
  {
    this.tournamentService.updateTournament(
      this.id,
        {
          id: this.id, 
          name: this.name, 
          tournamentDate: this.tournamentDate,
          maxTeamAmount: this.maxTeamAmount,
          description: this.description, 
          registrationStarts: this.registrationStarts, 
          registrationEnds: this.registrationEnds, 
          status: this.status,
          liveTransmisionEmbed: this.liveTransmisionEmbed
        }).subscribe(tournament => {
          window.location.reload();
        });
  }
}
