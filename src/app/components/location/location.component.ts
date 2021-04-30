import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(
    public getCinemasService: GetCinemasService,
    public route: ActivatedRoute,
    public showTimeService: GetShowtimeService
  ) {}

  ngOnInit(): void {
    this.getLocation();
    this.getShowingTime();
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
      const time = _data.showtime;
      const u = time.filter((val) => {
        return val;
      });
      this.title = u;
      for (const [key, value] of Object.entries(u)) {
        console.log(`${key}: ${value}`);
      }
      // this.week = u[0].showing
      const gh = u.filter((item) => {
        return item.showing;
      });
      console.log(gh[1].showing[1][0]);
    });
  }
}
