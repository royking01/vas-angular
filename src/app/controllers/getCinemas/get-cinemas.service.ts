import { Injectable } from '@angular/core';
import { cinemas } from '../../Data/Cinemas';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetCinemasService {
  constructor() {}
  // GET DATA FOR VARIOUS CINEMA
  getCinemas(): Observable<any> {
    return of(cinemas);
  }
}
