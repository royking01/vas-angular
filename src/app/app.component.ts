import { Component, OnInit } from '@angular/core';
import { cinemas } from './Data/Cinemas';
import { movies } from './Data/Movies';
import { showTime } from './Data/showTime';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'vas-cinemas';
  cinemas = [];
  movies = [];
  showTime = [];
  locationTime = [];
  location: string = '';
  selectedLocation: boolean;
  constructor() {}
  ngOnInit() {
    this.getCinemas();
    this.getMovies();
  }
  getCinemas() {
    this.cinemas = cinemas;
  }
  getMovies() {
    this.movies = movies;
  }

  getMovieTime() {
    //  console.log(this.locationTime[0].Movie)
    const time = this.locationTime[0].Cinema.showtime
    //GET TITLE
    let title = time.filter((item) => {
      return item.title;
    });
    console.log('tit',title);
  }
}
