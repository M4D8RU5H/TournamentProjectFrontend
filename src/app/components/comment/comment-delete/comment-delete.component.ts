import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-delete',
  templateUrl: './comment-delete.component.html',
  styleUrls: ['./comment-delete.component.css']
})
export class CommentDeleteComponent implements OnInit {
  id? : number;

  constructor() { }

  ngOnInit(): void {
  }

  deleteComment() : void
  {
    
  }

}
