import { Injectable } from '@angular/core';
import { showTime } from 'src/app/Data/showTime';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetShowtimeService {
  locationTime: any;
  constructor() {}

  // GET SHOWING TIME FOR ALL MOVIES AND LOCATION
  getShowingTime(): Observable<any> {
    return of(showTime);
  }

  // GET SPECIFIC LOCATION SHOWING TIME
  async getLocationShowingTime(id) {
    // GET LOCATION AND ITS DATA
    const data = showTime.find((val) => {
      return val.id == id;
    });
    return data;
  }
}
