
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Post } from '../models/post';

@Injectable()
export class PostService {

  url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts(): Observable<Post[]> {

     return this.http.get(this.url)
      .map((response: Response) => response.json());
  }

}
