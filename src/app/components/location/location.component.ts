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
  monday = ['kjhg','89','kjhg',0]
  tuesday = []
  wednesday = []
  thursday = []
  friday = []
  saturday = []
  sunday = []
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
      console.log('FIRST LAYER ID', _data);

      const time = _data.showtime;
      const u = time.filter((val) => {
        return val;
      });
      //SECOND LAYER
      console.log('SECOND LAYER SHOW TIME', u);
      const d = u.filter((val) => {
        const data = [];
        const i = val.showing.filter((d) => {
          return d;
        });
        let flat = [].concat.apply([], i) 
        // let flattened = [].concat.apply([], this.rows)
        data.push(flat)
          this.monday = flat[0].Monday
         const t = this.monday.map((t)=>{
          //  console.log("ttt", t)
            return t
          })

          console.log('t',t[0])
          this.tuesday = flat[1].Tuesday[0]
          this.wednesday = flat[2].Wednesday[0]
          this.thursday = flat[3].Thursday[0]
          this.friday = flat[4].Friday[0]
          this.saturday = flat[5].Saturday[0]
          this.sunday = flat[6].Sunday[0]
          console.log(this.monday)
        // console.log('data',flat[6].Sunday[0]);

        return data;
      });
      // THIS IS AN ARRAY OF SHOWING TIMES FOR THE FIRST DAY OF THE FIRST MOVIE
      console.log('HARD CODED INDEX ', d[0].showing[0].Monday);

      this.title = u;
      for (const [key, value] of Object.entries(u)) {
        // console.log(`${key}: ${value}`);
      }
      const gh = u.filter((item) => {
        return item.showing;
      });
    });
  }
}
