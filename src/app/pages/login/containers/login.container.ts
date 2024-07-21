import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from '../components/login.component';

@Component({
  selector: 'app-login-container',
  standalone: true,
  imports: [RouterOutlet, LoginComponent],
  template: '<app-login></app-login>',
})
export class LoginContainer { }
