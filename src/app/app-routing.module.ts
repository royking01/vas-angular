import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinemasComponent } from './components/cinemas/cinemas.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { LocationComponent } from "./components/location/location.component";
const routes: Routes = [
  {
    path: '',
    redirectTo: 'cinemas',
    pathMatch: 'full',
    // component: SignInComponent,
  },
  {
    path: 'cinemas',
    component: CinemasComponent,
  },
  {
    path: 'add-movie',
    component: LogInComponent,
  },
  {
    path:'cinemas/:id',
    component: LocationComponent,
  },
  {
    path: '**',
    redirectTo: 'cinemas',
    // component: SignInComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
