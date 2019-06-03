import { Component } from '@angular/core';
import { NgModule } from '@angular/core';


import { MyNavbarComponent } from './components/shared/my-navbar/my-navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appangular';
}

@NgModule({
  declarations: [
    MyNavbarComponent
  ]
})
export class AppModule { }