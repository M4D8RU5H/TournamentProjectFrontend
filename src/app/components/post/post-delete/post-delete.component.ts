import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-delete',
  templateUrl: './post-delete.component.html',
  styleUrls: ['./post-delete.component.css']
})
export class PostDeleteComponent implements OnInit {
  id? : number;

  constructor() { }

  ngOnInit(): void {
  }

  deletePost() : void
  {

  }

}
