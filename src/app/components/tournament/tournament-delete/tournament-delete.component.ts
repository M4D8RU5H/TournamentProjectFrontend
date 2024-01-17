import { Component, OnInit } from '@angular/core';
import { TournamentService } from 'src/app/services/tournament.service';

@Component({
  selector: 'app-tournament-delete',
  templateUrl: './tournament-delete.component.html',
  styleUrls: ['./tournament-delete.component.css']
})
export class TournamentDeleteComponent implements OnInit {

  id: number = 0;

  constructor(private tournamentService : TournamentService) { }

  ngOnInit(): void {
  }

  deleteTournament() : void
  {
    this.tournamentService.deleteTournament(this.id).subscribe();
  }

}
