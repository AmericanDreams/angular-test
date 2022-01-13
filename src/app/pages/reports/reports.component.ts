import { Component, OnInit } from '@angular/core';
import { Report } from '../../objects/Report';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  reports!: Report[]

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.getReports().subscribe(arts => {
      this.reports = arts;
    })
  }

}
