import { Component, OnInit } from '@angular/core';

//import {members} from './members.service'

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  title = 'Members';
  members =  [];

  constructor() { }

  ngOnInit() {
  }

}
