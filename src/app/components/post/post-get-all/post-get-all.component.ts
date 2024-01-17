import { Component, OnInit } from '@angular/core';
import { post } from 'src/app/models/Post/post';
import { postGet } from 'src/app/models/Post/postResponse';
import { CommentService } from 'src/app/services/comment.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-get-all',
  templateUrl: './post-get-all.component.html',
  styleUrls: ['./post-get-all.component.css'],
})
export class PostGetAllComponent implements OnInit {
  posts?: postGet[];
  loggedUserId: number = 0;

 i: number = 3; 

  constructor(
    private postService: PostService,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(): void {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts.posts;
      this.posts?.forEach(function(part)
      {
        part.amount = 3;
      })
    });
  }

  addComment(postId: number, commentContent: string): void {
    let commentDate = new Date();
    let commentDateString = commentDate.toJSON();

    let userId = localStorage.getItem('LoggedUserId');

    if (userId) {
      this.loggedUserId = parseInt(userId);
    }

    this.commentService
      .createComment({
        id: 0,
        userId: this.loggedUserId,
        content: commentContent,
        postId: postId,
        commentDate: commentDateString,
      })
      .subscribe((comment) => {
        this.getAllPosts();
      });
  }

  expand(postId: number)
  {
    let post = this.posts?.find(i => i.id == postId);

    if(post)
    {
      post.amount +=  3;
    }
  }
}
