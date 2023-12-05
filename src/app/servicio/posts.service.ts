import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, tap, catchError } from 'rxjs';
import { Post } from '../interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private httpClient: HttpClient) {}

  getPosts(): Observable<Post> {
    const postUrl = `https://jsonplaceholder.typicode.com/posts/100`;
    return this.httpClient.get<Post>(postUrl).pipe(
      tap(console.log),
      delay(2000),
      catchError((error) => {
        console.log(error);
        throw new Error(error);
      })
    );
  }
}
