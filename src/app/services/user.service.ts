import { Injectable } from '@angular/core';
import { playerMatchDetails, playerQueueInfo, user, userPhrase } from '../models/User/user';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';
import { userData } from '../models/Authentication/userData';
import { playerMatchDetailsResponse, playerQueueInfoResponse, usersDictionaryResponse, usersResponse } from '../models/User/usersResponse';
import { userResponse } from '../models/User/userResponse';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  httpParams = new HttpParams()

  constructor(private httpClient: HttpClient) { }

  getUsers = (): Observable<usersResponse> => this.httpClient.get<usersResponse>("https://localhost:5001/api/Users");

  getUser  = (id: number): Observable<userResponse> => this.httpClient.get<userResponse>("https://localhost:5001/api/Users/" + id);

  getUsersByUsername  = (user: userPhrase) : Observable<usersResponse> => this.httpClient.post<usersResponse>("https://localhost:5001/api/Users/Username", user);

  getUsersDictionary  = () : Observable<usersDictionaryResponse> => this.httpClient.get<usersDictionaryResponse>("https://localhost:5001/api/Users/UsersDictionary");

  createUser = (user: user): Observable<user> => this.httpClient.post<user>("https://localhost:5001/api/Users", user);

  updateUser = (id: number, user: user): Observable<user> => this.httpClient.put<user>("https://localhost:5001/api/Users/" + id, user);

  deleteUser = (id: number): Observable<user> => this.httpClient.delete<user>("https://localhost:5001/api/Users/" + id);

  loginUser = (Email: string, Password: string) : Observable<userData> => this.httpClient.post<userData>("https://localhost:5001/api/Users/authenticate", {Email, Password});

  getUserMatchHistory  = (userId: number): Observable<playerMatchDetailsResponse> => this.httpClient.get<playerMatchDetailsResponse>("https://localhost:5001/api/Users/UserMatchHistory/" + userId);

  getUserInGameInformation  = (userId: number): Observable<playerQueueInfoResponse> => this.httpClient.get<playerQueueInfoResponse>("https://localhost:5001/api/Users/UserInGameInformations/" + userId);
}

