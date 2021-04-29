import { Injectable } from '@angular/core';
import { movies } from '../../Data/Movies';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetMoviesService {
  // GET EACH MOVIE FROM THE DATBASE AND THIER RESPECTIVE DATA
  constructor() {}
  getMovies(): Observable<any> {
    return of(movies);
  }
}
