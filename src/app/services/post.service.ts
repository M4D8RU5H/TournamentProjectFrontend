import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { postResponse } from '../models/Post/postResponse';
import { postsResponse } from '../models/Post/postsResponse';
import { post } from '../models/Post/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient : HttpClient) { }

  getPosts = (): Observable<postsResponse> => this.httpClient.get<postsResponse>("https://localhost:5001/api/Posts");

  getPost  = (id: number): Observable<postResponse> => this.httpClient.get<postResponse>("https://localhost:5001/api/Posts/" + id);

  createPost = (post: post): Observable<post> => this.httpClient.post<post>("https://localhost:5001/api/Posts", post);

  updatePost = (id: number, post: post): Observable<post> => this.httpClient.put<post>("https://localhost:5001/api/Posts/" + id, post);

  deletePost = (id: number): Observable<post> => this.httpClient.delete<post>("https://localhost:5001/api/Posts/" + id);
}
