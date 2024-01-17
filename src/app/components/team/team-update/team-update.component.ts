import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-update',
  templateUrl: './team-update.component.html',
  styleUrls: ['./team-update.component.css']
})
export class TeamUpdateComponent implements OnInit {

  constructor(private teamService : TeamService) { }

  id: number = 0;
  name: string = "";
  ratio: number = 0;

  ngOnInit(): void {
  }

  updateTeam() : void
  {
    this.teamService.updateTeam(
      this.id,
        {
          teamLeaderId:this.id,
          id: this.id,
          name: this.name,
          ratio: this.ratio,
        }).subscribe();
  }
}
