import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MembersComponent } from './components/members/members.component';
import { HeroesComponent } from './components/heroes/heroes.component';

const routes: Routes = [
  {
    path: '',   component: HomeComponent
  },
  {
    path: 'about',   component: AboutComponent
  },
  {
    path: 'members',   component: MembersComponent
  },
  {
    path: 'heroes',   component: HeroesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
