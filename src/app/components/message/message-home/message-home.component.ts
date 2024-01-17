import { Component } from '@angular/core';

@Component({
  selector: 'app-message-home',
  templateUrl: './message-home.component.html',
  styleUrls: ['./message-home.component.css']
})
export class MessageHomeComponent {

  selectedItem : number = 1;

  swapItem(id: number) : void{
    this.selectedItem = id;
  }

}
