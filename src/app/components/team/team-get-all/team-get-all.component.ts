import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { team } from 'src/app/models/Team/team';
import { teamGet } from 'src/app/models/Team/teamResponse';
import { teamsResponse } from 'src/app/models/Team/teamsResponse';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-get-all',
  templateUrl: './team-get-all.component.html',
  styleUrls: ['./team-get-all.component.css']
})
export class TeamGetAllComponent implements OnInit {

  teams?: teamGet[];

  showLoading = true;
  
  defaultPageSize: number = 5;
  currentPage: number = 1;
  totalPages: number = 0;

  begin: number = 0;
  end: number = 6;
  pageSize: number = 6;

  pageSizeOptions: number[] = [6, 12, 18];
  
  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.getAllTeams();

    setTimeout(() => {
      this.showLoading = false;
    }, 15000);
  }

  getAllTeams() {
    this.teamService.getTeams().subscribe(teams => {
      this.teams = teams.teams;
      this.showLoading = false;
    });
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.begin = event.pageIndex * event.pageSize;
    this.end = this.begin + event.pageSize;
  }
}
