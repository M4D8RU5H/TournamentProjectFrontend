import { Component } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';
import {Router} from "@angular/router";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-report-create',
  templateUrl: './report-create.component.html',
  styleUrls: ['./report-create.component.css']
})

export class ReportCreateComponent {
  senderId: number = 0;
  category: number = 0;
  description: string = "";
  date: string = "";

  constructor(private reportService : ReportService, private router: Router, private fb: FormBuilder) {}

  ngOnInit()
  {
  }

  createReport() : void
  {
    let userId = localStorage.getItem('LoggedUserId');

    if (userId) {
      this.senderId = parseInt(userId);
    }

    this.reportService.createReport({
      id: 0,
      userId: this.senderId,
      category: this.category,
      description: this.description,
      date: this.date,
      status: 1,
    }).subscribe();
    this.router.navigate(['/report-get-all']);
  }
}
