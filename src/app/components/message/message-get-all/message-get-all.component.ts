import { Component, OnInit } from '@angular/core';
import { message } from 'src/app/models/Message/message';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message-get-all',
  templateUrl: './message-get-all.component.html',
  styleUrls: ['./message-get-all.component.css']
})
export class MessageGetAllComponent implements OnInit {

  messages?: message[];

  constructor(private messageService : MessageService) { }

  ngOnInit(): void {
    this.getAllMessages()
  }

  getAllMessages() : void
  {
    let userId = localStorage.getItem('LoggedUserId');

    if (userId) {
      const parsedUserId = parseInt(userId);
  
      this.messageService.getComments().subscribe(messages => {
        if (messages && messages.messages) {
          this.messages = messages.messages.filter(message => message.senderId === parsedUserId);
        }
      });
}
}
}
