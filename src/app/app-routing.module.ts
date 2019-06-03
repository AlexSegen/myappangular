import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MembersComponent } from './components/members/members.component';

import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent }  from './components/hero-detail/hero-detail.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  /* {
    path: '',   component: HomeComponent
  }, */
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'about',   component: AboutComponent
  },
  {
    path: 'members',   component: MembersComponent
  },
  {
    path: 'heroes',   component: HeroesComponent
  },
  {
    path: 'detail/:id',   component: HeroDetailComponent
  },
  {
    path: 'dashboard',   component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
