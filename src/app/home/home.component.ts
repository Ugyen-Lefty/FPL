import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  createRoom() {
    this.route.navigateByUrl('create-room/1');
  }

  joinRoom() {
    this.route.navigateByUrl('join-room');
  }

}
