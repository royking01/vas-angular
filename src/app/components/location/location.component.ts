import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetMoviesService } from 'src/app/controllers/getMovies/get-movies.service';
import { cinema } from 'src/app/Models/Cinema';
import { GetCinemasService } from '../../controllers/getCinemas/get-cinemas.service';
import { GetShowtimeService } from '../../controllers/getShowtime/get-showtime.service';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  location: string = '';
  data = [];
  title = [];
  week = [];
  Movies = [];
  constructor(
    public getCinemasService: GetCinemasService,
    public route: ActivatedRoute,
    public showTimeService: GetShowtimeService,
    public movieService: GetMoviesService
  ) {}

  ngOnInit(): void {
    this.getLocation();
    this.getShowingTime();
    this.getMovie();
  }
  getMovie() {
    this.movieService.getMovies().subscribe((movie) => {
      const movi = movie.map((_movie) => {
        return _movie.title;
      });
      this.Movies = movi;
      console.log('Movies', movi);
    });
  }
  getLocation() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getCinemasService.getCinema(id).subscribe((cinema) => {
      this.location = cinema.location;
    });
  }

  getShowingTime() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.showTimeService.getLocationShowingTime(id).then((_data) => {
      this.data.push(_data);

      //FIRST LAYER
      // console.log('FIRST LAYER', _data);

      const time = _data.showtime;
      const u = time.filter((val) => {
        return val;
      });

      //SECOND LAYER
      // console.log('Second LAyer', u);

      const d = u.filter((val) => {
        return val.showing;
      });
      console.log('show', d);
      this.week = d;
      // THIS IS AN ARRAY OF SHOWING TIMES FOR THE FIRST DAY OF THE FIRST MOVIE
      console.log('showing 1 Monday ', d[0].showing[0].Monday);

      const e = d.forEach((d) => {
        return d.showing;
      });
      const de = [];
      de.push(e[0].showing[0]);
      console.log('eee', de);

      this.title = u;
      for (const [key, value] of Object.entries(u)) {
        // console.log(`${key}: ${value}`);
      }
      const gh = u.filter((item) => {
        return item.showing;
      });
      // console.log(gh[1].showing[1][0]);
    });
  }
}
