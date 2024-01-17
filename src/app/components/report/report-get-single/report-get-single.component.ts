import { Component } from '@angular/core';
import { report } from 'src/app/models/Report/report';

@Component({
  selector: 'app-report-get-single',
  templateUrl: './report-get-single.component.html',
  styleUrls: ['./report-get-single.component.css']
})
export class ReportGetSingleComponent {
  report?: report;

  getReport() : void
  {
    
  }
}
