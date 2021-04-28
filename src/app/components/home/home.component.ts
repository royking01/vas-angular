import { Component, OnInit } from '@angular/core';
import { showTimes } from '../../Data/showtimes';
import { movies } from '../../Data/movies';
import { GetmoviesService } from '../../services/getmovies.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  showtimes = [];
  location;
  data = [];
  Movies = [];
  time = [];
  constructor(public getmovies: GetmoviesService) {}

  ngOnInit(): void {}
  getShowTime(e) {
    this.getmovies.getMovies(e).subscribe((movies) => (this.data = movies));
    this.location = this.data[0].location;
    this.Movies = this.data[0].movie;
  }
}
