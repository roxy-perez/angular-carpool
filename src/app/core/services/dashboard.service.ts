import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getDashboardData(): Observable<any> {
    const fakeData = {
      rides: [
        {
          id: 1,
          user: { first_name: 'John', last_name: 'Doe' },
          travel_start_time: '2024-07-16T08:00:00Z'
        },
        {
          id: 2,
          user: { first_name: 'Jane', last_name: 'Smith' },
          travel_start_time: '2024-07-17T09:00:00Z'
        }
      ],
      users: [
        {
          first_name: 'John',
          last_name: 'Doe',
          email: 'john.doe@example.com'
        },
        {
          first_name: 'Jane',
          last_name: 'Smith',
          email: 'jane.smith@example.com'
        }
      ]
    };

    return of(fakeData);
  }
}
