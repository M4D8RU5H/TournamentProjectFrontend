import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { message } from '../models/Message/message';
import { messageResponse } from '../models/Message/messageResponse';
import { messagesResponse } from '../models/Message/messagesResponse';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private httpClient : HttpClient) { }

  getComments = (): Observable<messagesResponse> => this.httpClient.get<messagesResponse>("https://localhost:5001/api/Messages");

  getComment  = (id: number): Observable<messageResponse> => this.httpClient.get<messageResponse>("https://localhost:5001/api/Messages/" + id);

  createComment = (message: message): Observable<message> => this.httpClient.post<message>("https://localhost:5001/api/Messages", message);

  updateComment = (id: number, user: message): Observable<message> => this.httpClient.put<message>("https://localhost:5001/api/Messages/" + id, user);

  deleteComment = (id: number): Observable<message> => this.httpClient.delete<message>("https://localhost:5001/api/Messages/" + id);
}
