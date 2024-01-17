import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor() { }

  public tabList = [
    {
      id: "1",
      name: 'User List',
      toggle: true,
      iconName: 'fa fa-user',
    },
    {
    id: "2",
    name: 'Add User',
    toggle: false,
    iconName: 'fa fa-trophy',
  },
  {
    id: "3",
    name: 'Update User',
    toggle: false,
    iconName: 'fa fa-users-line',
  }]

  buttonId : number = 1;

  ngOnInit()
  {
    let buttonId = localStorage.getItem('id')
    if(buttonId)
    {
      this.toggleTab(buttonId);
    }

    localStorage.removeItem('id')
  }

  toggleTab(buttonId: string) : void
  {
    const filteredItems = this.tabList.filter((value, index) => value.id !== buttonId);

    var selectedButton = this.tabList.find(f => f.id == buttonId);

    if(selectedButton)
    {
      selectedButton.toggle = true;
    }

    filteredItems.forEach(function(part, index) {
      filteredItems[index].toggle = false;
    });

    localStorage.setItem('id', buttonId);

    this.buttonId = parseInt(buttonId);
  }

}
