import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

   posts: Post[];
  constructor(private _service: PostService) { }

  ngOnInit() {
    this._service.getPosts().subscribe(p => this.posts = p);
  }

}
