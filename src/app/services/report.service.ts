import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { report } from '../models/Report/report';
import { reportResponse } from '../models/Report/reportResponse';
import { reportsResponse } from '../models/Report/reportsResponse';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private httpClient : HttpClient) { }

  getReports = (): Observable<reportsResponse> => this.httpClient.get<reportsResponse>("https://localhost:5001/api/Reports");

  getReport  = (id: number): Observable<reportResponse> => this.httpClient.get<reportResponse>("https://localhost:5001/api/Reports/" + id);

  createReport = (report: report): Observable<report> => this.httpClient.post<report>("https://localhost:5001/api/Reports", report);

  updateReport = (id: number, report: report): Observable<report> => this.httpClient.put<report>("https://localhost:5001/api/Reports/" + id, report);

  deleteReport = (id: number): Observable<report> => this.httpClient.delete<report>("https://localhost:5001/api/Reports/" + id);
}
