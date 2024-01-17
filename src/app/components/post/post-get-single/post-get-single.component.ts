import { Component, OnInit } from '@angular/core';
import { post } from 'src/app/models/Post/post';

@Component({
  selector: 'app-post-get-single',
  templateUrl: './post-get-single.component.html',
  styleUrls: ['./post-get-single.component.css']
})
export class PostGetSingleComponent implements OnInit {
  post? : post;

  constructor() { }

  ngOnInit(): void {
  }

}
