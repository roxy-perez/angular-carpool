import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8500/api';

  constructor(private http: HttpClient) { }

  register(data: any): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/user/register`, data);
  }

  login(data: any): Observable<User> {
    console.log('data', data);
    return this.http.post<User>(`${this.apiUrl}/user/login`, data);
  }

  logout(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.apiUrl}/user/logout`, {}, { headers });
  }

  getUser(token: string): Observable<User> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<User>(`${this.apiUrl}/user`, { headers });
  }
}
