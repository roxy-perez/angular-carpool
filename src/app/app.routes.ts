import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent }
    ]
  }
];
