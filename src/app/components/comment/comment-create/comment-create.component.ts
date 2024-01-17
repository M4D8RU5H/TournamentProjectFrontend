import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit {
  
  userId? : number;
  content? : string;
  postId? : number;
  commentDate? : string;

  constructor() { }

  ngOnInit(): void {
  }

  createComment() : void
  {
    
  }

}
