import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private URL_LINK = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  findPopularPosts():Observable<Post[]> {
    return this.http.get<Post[]>(this.URL_LINK);
  }

  findPostById(postId: string): Observable<Post[]> {
   // return this.http.get<Post>(this.URL_LINK + "/" + postId);
    return this.http.get<Post[]>(this.URL_LINK);
  }
}
