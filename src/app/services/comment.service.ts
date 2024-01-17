import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { comment } from '../models/Comment/comment';
import { commentResponse } from '../models/Comment/commentResponse';
import { commentsResponse } from '../models/Comment/commentsResponse';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient : HttpClient) { }

  getComments = (): Observable<commentsResponse> => this.httpClient.get<commentsResponse>("https://localhost:5001/api/Comments");

  getComment  = (id: number): Observable<commentResponse> => this.httpClient.get<commentResponse>("https://localhost:5001/api/Comments/" + id);

  createComment = (comment: comment): Observable<comment> => this.httpClient.post<comment>("https://localhost:5001/api/Comments", comment);

  updateComment = (id: number, comment: comment): Observable<comment> => this.httpClient.put<comment>("https://localhost:5001/api/Comments/" + id, comment);

  deleteComment = (id: number): Observable<comment> => this.httpClient.delete<comment>("https://localhost:5001/api/Comments/" + id);
}
