import { Component, OnInit } from '@angular/core';
import { message } from 'src/app/models/Message/message';

@Component({
  selector: 'app-message-get-single',
  templateUrl: './message-get-single.component.html',
  styleUrls: ['./message-get-single.component.css']
})
export class MessageGetSingleComponent implements OnInit {

  message?:message;

  constructor() { }

  ngOnInit(): void {
  }

  getSingleMessage() : void
  {
    
  }

}
