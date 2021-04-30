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


  //GET LOCATION AND DATA FOR A SINGLE CINEMA
  getCinema(id): Observable<any> {
    return of(cinemas.find((cinema) => cinema.id == id));
  }
}
