import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { team } from '../models/Team/team';
import { teamMember } from '../models/Team/teamMember';
import { teamResponse } from '../models/Team/teamResponse';
import { teamsDictionaryResponse, teamsResponse } from '../models/Team/teamsResponse';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private httpClient: HttpClient) { }

  getTeams = (): Observable<teamsResponse> => this.httpClient.get<teamsResponse>("https://localhost:5001/api/Teams");

  getTeam = (id: number): Observable<teamResponse> => this.httpClient.get<teamResponse>("https://localhost:5001/api/Teams/" + id);

  createTeam = (team: team): Observable<team> => this.httpClient.post<team>("https://localhost:5001/api/Teams", team);

  updateTeam = (id: number, team: team): Observable<team> => this.httpClient.put<team>("https://localhost:5001/api/Teams/" + id, team);

  deleteTeam = (id: number): Observable<team> => this.httpClient.delete<team>("https://localhost:5001/api/Teams/" + id);

  addTeamMember = (team: teamMember): Observable<teamMember> => this.httpClient.patch<teamMember>("https://localhost:5001/api/Teams/AddTeamMember", team);

  deleteTeamMember = (team: teamMember): Observable<teamMember> => this.httpClient.patch<teamMember>("https://localhost:5001/api/Teams/DeleteTeamMember", team);

  getLinkedTournamentTeams = (tournamentId : number) : Observable<teamsResponse> => this.httpClient.get<teamsResponse>("https://localhost:5001/api/Teams/TournamentLinked/" + tournamentId);

  getTeamDictionary  = (id: number) : Observable<teamsDictionaryResponse> => this.httpClient.get<teamsDictionaryResponse>("https://localhost:5001/api/Teams/UserTeams/" + id);

}
