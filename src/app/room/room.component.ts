import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  teamName: any;
  currentUser: any;
  isLoading = true;
  userStats: any;

  constructor(public route: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.currentUser = localStorage['user_name'] || '';
    if (!this.currentUser) {
      Swal.fire({
        title: 'Please Enter a Team Name',
        input: 'text',
        showConfirmButton: true,
        icon: "question",
        backdrop:
          `
          rgba(0,0,0,0.7)
        `
      }).then((res) => {
        this.teamName = res.value;
        this.api.newUser({
          name: res.value,
          money: 20,
          fans: 3,
          fitness: 3,
          wins: 0
          // staff: 
        });
        localStorage.setItem('user_name', res.value);

        this.isLoading = false
        Swal.fire({
          title: `Welcome to the Game ${this.teamName}!`,
          timer: 2000,
          toast: true,
          showConfirmButton: false,
          icon: "success",
        });
      });
    } else {
      this.teamName = localStorage['user_name'];
      this.isLoading = false;
    }
    this.api.getById('9gOXciTrKZgmLyATFYgG').subscribe(res => {
      this.userStats = res;
    });
  }
}
