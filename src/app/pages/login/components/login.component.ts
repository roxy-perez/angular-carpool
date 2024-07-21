import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  isSignDivVisible: boolean = true;
  signUp: SignUpModel = new SignUpModel();
  signIn: SignInModel = new SignInModel();

  constructor(private authService: AuthService) { }

  toggleForms() {
    this.isSignDivVisible = !this.isSignDivVisible;
  }
  onSignUp() {
    if (this.signUp.password !== this.signUp.password_confirmation) {
      alert('Passwords do not match');
      return;
    }
    this.authService.register(this.signUp).subscribe(response => {
      console.log('Registration successful', response);
      this.toggleForms();
    }, error => {
      console.error('Registration failed', error);
    });
  }

  onSignIn() {
    this.authService.login(this.signIn).subscribe(response => {
      console.log('Login successful', response);
      // Maneja el inicio de sesión exitoso aquí, como redirigir a otra página
    }, error => {
      console.error('Login failed', error);
    });
  }

}

export class SignUpModel {
  public name: string;
  public phone_number: string;
  public email: string;
  public password: string;
  public password_confirmation: string;

  constructor() {
    this.name = '';
    this.phone_number = '';
    this.email = '';
    this.password = '';
    this.password_confirmation = '';
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
