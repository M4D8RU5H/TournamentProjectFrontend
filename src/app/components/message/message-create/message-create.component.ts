import { Component, OnInit } from '@angular/core';
import { message } from 'src/app/models/Message/message';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message-create',
  templateUrl: './message-create.component.html',
  styleUrls: ['./message-create.component.css']
})
export class MessageCreateComponent implements OnInit {

  id: number = 0;
  senderId: number = 0;
  receiverId: number = 0;
  content: string = '';
  date: string = '';

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    let userId = localStorage.getItem('LoggedUserId');

    if(userId)
    {
       this.id = parseInt(userId);
    }
  }

  createMessage() : void
  {
    let dateNow = new Date();

    this.date = dateNow.toString();

    this.messageService.createComment(
      {
        id: 0,
        senderId: this.id,
        receiverId: this.receiverId,
        content: this.content,
        date: this.date,
        readed: false
      }
    ).subscribe();
  }
}
