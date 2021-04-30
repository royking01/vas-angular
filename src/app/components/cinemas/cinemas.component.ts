import { Component, OnInit } from '@angular/core';
import { GetMoviesService } from '../../controllers/getMovies/get-movies.service';
import { GetCinemasService } from '../../controllers/getCinemas/get-cinemas.service';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.scss'],
})
export class CinemasComponent implements OnInit {
  cinemas = [];
  Cinemas: boolean = false;
  viewShows: boolean = false;
  buttonDisplay: boolean = false;

  movies = [];
  constructor(
    public getMovieService: GetMoviesService,
    public getCinemasService: GetCinemasService
  ) {}

  ngOnInit(): void {}
  getCinemas() {
    this.getCinemasService.getCinemas().subscribe((cinemas) => {
      this.cinemas = cinemas;
    });
    this.Cinemas = true;
    this.buttonDisplay = true;
  }
  viewData() {
    this.viewShows = true;
    this.buttonDisplay = true;
    this.Cinemas = false;
  }
  closeShows() {
    this.viewShows = false;
    this.buttonDisplay = false;
    this.Cinemas = false;
  }
  getMovies() {
    this.viewShows = true;
    this.buttonDisplay = true;
    const show = localStorage.getItem('shows');
    if (!show) {
      this.getMovieService.getMovies().subscribe((movies) => {
        this.movies = movies;
        localStorage.setItem('shows', JSON.stringify(movies));
      });
    } else {
      this.movies = JSON.parse(show);
    }
  }
}
