import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../core/services/dashboard.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCar, faUsers, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardData: any;
  faCar = faCar;
  faUsers = faUsers;
  faTachometerAlt = faTachometerAlt;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.dashboardService.getDashboardData().subscribe(data => {
      this.dashboardData = data;
      console.log(this.dashboardData);
    }, error => {
      console.error('Error loading dashboard data', error);
    });
  }
}
