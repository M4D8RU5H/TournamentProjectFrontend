import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-home',
  templateUrl: './team-home.component.html',
  styleUrls: ['./team-home.component.css'],
})
export class TeamHomeComponent implements OnInit {
  public tabList = [
    {
      id: '1',
      name: 'All Teams',
      toggle: true,
      iconName: 'fa fa-user',
    },
    {
      id: '2',
      name: 'Your Teams',
      toggle: false,
      iconName: 'fa fa-users-line',
    },
    {
      id: '3',
      name: 'Create Team',
      toggle: false,
      iconName: 'fa fa-trophy',
    },
    {
      id: '4',
      name: 'Edit Team',
      toggle: false,
      iconName: 'fa fa-users-line',
    },
  ];

  buttonId: number = 1;

  constructor() {}

  ngOnInit() {
  }

  toggleTab(buttonId: string): void {
    const filteredItems = this.tabList.filter(
      (value, index) => value.id !== buttonId
    );

    var selectedButton = this.tabList.find((f) => f.id == buttonId);

    if (selectedButton) {
      selectedButton.toggle = true;
    }

    filteredItems.forEach(function (part, index) {
      filteredItems[index].toggle = false;
    });

    this.buttonId = parseInt(buttonId);
  }
}
