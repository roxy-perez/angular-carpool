import { Routes } from '@angular/router';
import { LoginContainer } from './pages/login/containers/login.container';
import { DashboardContainer } from './pages/dashboard/containers/dashboard.container';
import { LayoutComponent } from './shared/layout/layout.component';

export const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: 'login', component: LoginContainer },
      { path: 'dashboard', component: DashboardContainer },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  }

];
