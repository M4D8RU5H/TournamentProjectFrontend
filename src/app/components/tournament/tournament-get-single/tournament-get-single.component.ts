import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TournamentService } from 'src/app/services/tournament.service';
import {
  tournamentGet,
  tournamentResponse,
} from 'src/app/models/Tournament/tournamentResponse';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';
import { teamGet } from 'src/app/models/Team/teamResponse';
import { MatchService } from 'src/app/services/match.service';
import { FormControl } from '@angular/forms';
import { teamDictionary } from 'src/app/models/Team/team';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, startWith, switchMap } from 'rxjs/operators';
import { tournamentTeam } from 'src/app/models/Tournament/tournamentTeam';
import { matchId } from 'src/app/models/Match/match';

@Component({
  selector: 'app-tournament-get-single',
  templateUrl: './tournament-get-single.component.html',
  styleUrls: ['./tournament-get-single.component.css'],
})
export class TournamentGetSingleComponent implements OnInit {
  tournament?: tournamentGet;

  showLoading: boolean = false;

  editMode: boolean = false;

  id: number = 0;

  display : boolean = false;

  newTeam: number = 0;

  exampleInput2 = new FormControl('');

  searchControl = new FormControl();

  loggedUserId: number = 0;

  teams: teamDictionary[] = [];

  teamsList?: teamGet[];

  constructor(
    private tournamentService: TournamentService,
    private teamService: TeamService,
    private matchService: MatchService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    let userId = localStorage.getItem('LoggedUserId');

    if (userId) {
      this.loggedUserId = parseInt(userId);
    }

    this.getSingleTournament();

    this.teamTeamsDictionary();

    this.getTournamentTeams();
  }

  save() {
    if (this.tournament) {
      this.tournamentService
        .updateTournament(this.id, {
          id: this.id,
          name: this.tournament.name,
          tournamentDate: this.tournament.tournamentDate.toString(),
          maxTeamAmount: this.tournament.maxTeamAmount,
          description: this.tournament.description,
          registrationStarts: this.tournament.registrationStarts.toString(),
          registrationEnds: this.tournament.registrationEnds.toString(),
          status: this.tournament.status,
          liveTransmisionEmbed: this.tournament.liveTransmisionEmbed,
        })
        .subscribe((tournament) => {
          window.location.reload();
        });
    }
  }

  getTournamentTeams()
  {
    this.teamService.getLinkedTournamentTeams(this.id).subscribe(team => {this.teamsList = team.teams; console.log(this.teams)})
  }

  getSingleTournament() {
    this.tournamentService.getTournament(this.id).subscribe((tournament) => {
      this.tournament = tournament.tournament;
    });
  }

  filteredTeams: Observable<teamDictionary[]> | undefined;

  displayFn(team: teamDictionary): string {
    return team && team.teamName ? team.teamName : '';
  }

  onSelectUser(team: teamDictionary): void {
    this.newTeam = team.id;
  }

  teamTeamsDictionary() {
    this.teamService.getTeamDictionary(this.loggedUserId).subscribe(data => {
      this.teams = data.teams || [];
      this.filteredTeams = this.searchControl.valueChanges
        .pipe(
          startWith(''),
          map(value => typeof value === 'string' ? value : value.name),
          map(name => name ? this._filter(name) : this.teams.slice())
        );
    });
  }

  addTeam()
  {
    if(this.tournament)
    {
      let teamToAdd = new tournamentTeam(this.tournament.id, this.newTeam);

      this.tournamentService.addTournamentTeam(teamToAdd).subscribe();
    }
  }

  displayPopup() : void{
    this.display = !this.display;
  }

  private _filter(name: string): teamDictionary[] {
    const filterValue = name.toLowerCase();
    return this.teams.filter(team => team.teamName.toLowerCase().indexOf(filterValue) === 0);
  }

  startTournament()
  {
    if(this.tournament)
    {
      let tournamentId = new matchId(this.tournament.id)

      this.matchService.createMatch(tournamentId).subscribe();
    }
  }
}
