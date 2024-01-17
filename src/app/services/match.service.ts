import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { match, matchId } from '../models/Match/match';
import { matchesResponse } from '../models/Match/matchesResponse';
import { matchResponse } from '../models/Match/matchResponse';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private httpClient : HttpClient) { }

  getMatches = (id: number): Observable<matchesResponse> => this.httpClient.get<matchesResponse>("https://localhost:5001/api/Matches/tournamentMatches/" + id);

  getMatch  = (id: number): Observable<matchResponse> => this.httpClient.get<matchResponse>("https://localhost:5001/api/Matches/" + id);

  createMatch = (id: matchId): Observable<match> => this.httpClient.post<match>("https://localhost:5001/api/Matches", id);

  updateMatch = (id: number, match: match): Observable<match> => this.httpClient.put<match>("https://localhost:5001/api/Matches/" , match);

  deleteMatch = (id: number): Observable<match> => this.httpClient.delete<match>("https://localhost:5001/api/Matches/" + id);
}
