import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from '../components/dashboard.component';

@Component({
  selector: 'app-dashboard-container',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent],
  template: '<app-dashboard></app-dashboard>',
})
export class DashboardContainer { }
