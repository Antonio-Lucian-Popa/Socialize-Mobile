import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private URL_LINK = 'http://localhost:3000/comments';

  constructor(private http: HttpClient) { }

  findCommentsByPostId(postId: number):Observable<Comment[]> {
    // TODO: add post id to url
    return this.http.get<Comment[]>(this.URL_LINK);
  }
}
