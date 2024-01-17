import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TournamentService } from 'src/app/services/tournament.service';

@Component({
  selector: 'app-tournament-create',
  templateUrl: './tournament-create.component.html',
  styleUrls: ['./tournament-create.component.css']
})
export class TournamentCreateComponent implements OnInit {

  constructor(private tournamentService: TournamentService) { }

  id: number = 0;
  name: string = "";
  tournamentDate: string = "";
  maxTeamAmount: number = 0;
  description: string = "";
  registrationStarts: string = "";
  registrationEnds: string = "";
  status: number = 0;
  liveTransmisionEmbed: string = "";

  exampleInput2 = new FormControl('');
  

  ngOnInit(): void {
  }

  createTournament() : void
  {
    this.tournamentService.createTournament(
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
      }).subscribe(torunament => {
        window.location.reload();
      });
  }

}
