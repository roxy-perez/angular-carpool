import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  isSignDivVisible: boolean = true;
  signUp: SignUpModel = new SignUpModel();
  signIn: SignInModel = new SignInModel();
}

export class SignUpModel {
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;
  public confirmPassword: string;

  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }
}

export class SignInModel {
  public email: string;
  public password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }
}
