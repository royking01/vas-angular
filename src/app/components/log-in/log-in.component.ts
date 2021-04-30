import { Component, OnInit } from '@angular/core';
import { GetUsersService } from '../../controllers/getUsers/get-users.service';
import { GetMoviesService } from '../../controllers/getMovies/get-movies.service';
import { Movie } from '../../Models/Movies';
import { movies } from 'src/app/Data/Movies';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  validating: boolean = false;
  loggedIn: boolean = false;
  addMovie: boolean = false;
  email: string;
  password: string;
  Users = [];
  rememberuser;
  genre: string;
  title: string;
  duration: string;
  Movie: Movie;
  constructor(
    private getUsersService: GetUsersService,
    public getMovieService: GetMoviesService
  ) {
    const name = localStorage.getItem('user');
    if (name) {
      this.loggedIn = true;
      this.addMovie = true;
    }
  }

  ngOnInit(): void {}

  validateEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  signIn(e) {
    e.preventDefault();
    this.validating = !this.validating;
    if (this.email != null && this.password !== null) {
      try {
        const mailformat =
          "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
        if (!this.validateEmail(this.email.toLowerCase())) {
          alert('invalid email');
          return;
        }
        this.getUsersService.getUsers().subscribe(async (users) => {
          this.Users = users;
          const userData = await users.find((user) => {
            return user.email == this.email && user.password == this.password;
          });
          if (userData) {
            alert('User Logged in');
            this.loggedIn = true;
            this.addMovie = true;
            this.validating = !this.validating;
            if (this.rememberuser == true) {
              localStorage.setItem('userName', userData.userName);
              //Password for only developmental purposes
              localStorage.setItem('password', userData.password);
            }
          } else {
            alert('invalid user input');
          }
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      alert('please input all fields');
      this.loggedIn = false;
      this.addMovie = false;
      this.validating = !this.validating;
    }
  }

  rememberUser(e) {
    this.rememberuser = e.target.checked;
  }

  addMovies(e) {
    e.preventDefault();

    this.getMovieService.getMovies().subscribe((movie) => {
      this.Movie = {
        id: movie.length + 1,
        title: this.title,
        genre: this.genre,
        duration: this.duration,
      };
      movie.push(this.Movie);
      localStorage.setItem('shows', JSON.stringify(movie));
    });
  }
  logOut() {
    this.loggedIn = false;
    this.addMovie = false;
    localStorage.removeItem('user');
  }
}
