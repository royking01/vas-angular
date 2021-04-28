import { Injectable } from '@angular/core';
import { showTimes } from './../Data/showtimes';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class GetmoviesService {
  showtimes = [];
  location 
  Movies = []
  time = []
  constructor() { }

  getLocation(e):Observable<any>{
    this.showtimes = showTimes;
    const id = showTimes.filter((loc) => {
      return loc.location == e;
    });
    this.location = id
    let d =  this.Movies = id[0].movie 
    return of(id)
  }
  getMovies(e):Observable<any>{
    this.showtimes = showTimes;
    const id = showTimes.filter((loc) => {
      return loc.location == e;
    });
    this.location = id
    let d =  this.Movies = id[0].movie 
    return of(id)
  }

}
