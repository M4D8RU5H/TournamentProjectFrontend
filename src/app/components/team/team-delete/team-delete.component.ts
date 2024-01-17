import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-delete',
  templateUrl: './team-delete.component.html',
  styleUrls: ['./team-delete.component.css']
})
export class TeamDeleteComponent implements OnInit {

  id: number = 0;

  constructor(private teamService : TeamService) { }

  ngOnInit(): void {
  }

  deleteTeam() : void
  {
    this.teamService.deleteTeam(this.id).subscribe();
  }

}
