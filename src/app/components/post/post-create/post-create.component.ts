import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  loggedUserId: number = 0;
  title: string = "";
  content: string = "";

  constructor( private postService: PostService, private router: Router) { }

  ngOnInit(): void {
  }

  createPost() : void
  {
    let date = new Date();
    let postDateString = date.toJSON();

    let userId = localStorage.getItem('LoggedUserId');

    if (userId) {
      this.loggedUserId = parseInt(userId);
    }

    this.postService
      .createPost({
        id: 0,
        userId: this.loggedUserId,
        content: this.content,
        title: this.title,
        date: postDateString,
      })
      .subscribe();
      this.router.navigate(['/post-get-all']);
  }

}
