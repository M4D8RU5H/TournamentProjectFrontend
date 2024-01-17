import { Component } from '@angular/core';
import { report } from 'src/app/models/Report/report';
import { reportGet } from 'src/app/models/Report/reportResponse';
import { user } from 'src/app/models/User/user';
import { ReportService } from 'src/app/services/report.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-report-get-all',
  templateUrl: './report-get-all.component.html',
  styleUrls: ['./report-get-all.component.css']
})
export class ReportGetAllComponent {
  reports?: reportGet[];

  constructor(private reportService : ReportService, userService: UserService) {}

  user?: user;

  ngOnInit(){
    this.getAllReports();
  }

  getAllReports()
  {
    this.reportService.getReports().subscribe(reports => {this.reports = reports.reports});
  }
}
