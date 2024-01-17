import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { tournament } from 'src/app/models/Tournament/tournament';
import { tournamentGet } from 'src/app/models/Tournament/tournamentResponse';
import { tournamentsResponse } from 'src/app/models/Tournament/tournamentsResponse';
import { TournamentService } from 'src/app/services/tournament.service';

@Component({
  selector: 'app-tournament-get-all',
  templateUrl: './tournament-get-all.component.html',
  styleUrls: ['./tournament-get-all.component.css']
})
export class TournamentGetAllComponent implements OnInit {

  public tournaments?: tournamentGet[];

  showLoading = true;

  displayedColumns: string[] = ['name', 'maxTeamAmount', 'registrationStarts', 'registrationEnds', 'status', 'info'];

  defaultPageSize: number = 5;
  currentPage: number = 1;
  totalPages: number = 0;

  begin: number = 0;
  end: number = 6;
  pageSize: number = 6;

  pageSizeOptions: number[] = [6, 12, 18];

  constructor(private tournamentService: TournamentService) {
  }

  ngOnInit(): void {
    this.getAllTournaments();

    setTimeout(() => {
      this.showLoading = false;
    }, 15000);
  }

  getAllTournaments() {
    this.tournamentService.getTournaments().subscribe(tournaments => {
      this.tournaments = tournaments.tournaments;
      this.showLoading = false;
    })
    console.log(this.tournaments?.length)
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.begin = event.pageIndex * event.pageSize;
    this.end = this.begin + event.pageSize;
  }
}
