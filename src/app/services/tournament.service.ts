import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { tournament } from '../models/Tournament/tournament';
import { tournamentsResponse } from '../models/Tournament/tournamentsResponse';
import { tournamentResponse } from '../models/Tournament/tournamentResponse';
import { tournamentTeam } from '../models/Tournament/tournamentTeam';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(private httpClient: HttpClient) { }

  getTournaments = (): Observable<tournamentsResponse> => this.httpClient.get<tournamentsResponse>("https://localhost:5001/api/tournaments");

  getTournament  = (id: number): Observable<tournamentResponse> => this.httpClient.get<tournamentResponse>("https://localhost:5001/api/tournaments/" + id);

  createTournament = (tournament: tournament): Observable<tournament> => this.httpClient.post<tournament>("https://localhost:5001/api/tournaments", tournament);

  updateTournament = (id: number, tournament: tournament): Observable<tournament> => this.httpClient.put<tournament>("https://localhost:5001/api/tournaments/" + id, tournament);

  deleteTournament = (id: number): Observable<tournament> => this.httpClient.delete<tournament>("https://localhost:5001/api/tournaments/" + id);

  addTournamentTeam = (team: tournamentTeam): Observable<tournamentTeam> => this.httpClient.patch<tournamentTeam>("https://localhost:5001/api/tournaments/AddTournamentTeam", team);

  deleteTournamentTeam = (team: tournamentTeam): Observable<tournamentTeam> => this.httpClient.patch<tournamentTeam>("https://localhost:5001/api/tournaments/DeleteTournamentTeam", team);

}
