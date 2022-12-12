import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentUser: any;

  constructor(private route: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.api.getCurrentUser().subscribe(res => {
      this.currentUser = res;
    });
  }

  createRoom() {
    this.route.navigateByUrl('create-room/1');
  }

  joinRoom() {
    this.route.navigateByUrl('join-room');
  }

}
