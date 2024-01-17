import { Component, OnInit } from '@angular/core';
import { comment } from 'src/app/models/Comment/comment';

@Component({
  selector: 'app-comment-get-all',
  templateUrl: './comment-get-all.component.html',
  styleUrls: ['./comment-get-all.component.css']
})
export class CommentGetAllComponent implements OnInit {
  comments?: comment[];
  constructor() { }

  ngOnInit(): void {
  }

  getCommnets() : void
  {

  }

}
