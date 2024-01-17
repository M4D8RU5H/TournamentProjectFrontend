import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-update',
  templateUrl: './comment-update.component.html',
  styleUrls: ['./comment-update.component.css']
})
export class CommentUpdateComponent implements OnInit {
  userId? : number;
  content? : string;
  postId? : number;
  commentDate? : string;
  
  constructor() { }

  ngOnInit(): void {
  }

  updateComment() : void
  {

  }

}
