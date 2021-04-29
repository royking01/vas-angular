import { Component, OnInit } from '@angular/core';
import { cinemas } from 'src/app/Data/Cinemas';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.scss'],
})
export class CinemasComponent implements OnInit {
  cinemas = [];

  constructor() {}

  ngOnInit(): void {
    this.getCinemas();
  }
  getCinemas() {
    this.cinemas = cinemas;
  }
}
