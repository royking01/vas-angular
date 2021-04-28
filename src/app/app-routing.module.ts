import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign',
    pathMatch: 'full',
    // component: SignInComponent,
  },
  {
    path: 'sign',
    component: SignInComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: '**', 
    redirectTo: 'sign', 
    // component: SignInComponent
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
