import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { tap } from 'rxjs/operators'; // esto nos permite hacer un console log del observable

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  // tslint:disable-next-line: typedef
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
      tap((posts) => {
        // tap nos permite ver por consola el contenido del observable - muy util para debugear observables
        console.log(posts);
      })
    );
  }
}
