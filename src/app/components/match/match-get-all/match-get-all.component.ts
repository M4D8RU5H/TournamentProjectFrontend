import { Component, OnInit } from '@angular/core';
import { match } from 'src/app/models/Match/match';

@Component({
  selector: 'app-match-get-all',
  templateUrl: './match-get-all.component.html',
  styleUrls: ['./match-get-all.component.css']
})
export class MatchGetAllComponent implements OnInit {

  matches?: match[];

  constructor() { }

  ngOnInit(): void {
  }

  getAllMatches() : void
  {

  }

}
