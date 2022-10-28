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
  isLoading = true;

  constructor(private route: Router) { }

  ngOnInit(): void {
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
      this.isLoading = false
      Swal.fire({
        title: `Welcome to the Game ${this.teamName}!`,
        timer: 2000,
        toast: true,
        showConfirmButton: false,
        icon: "success",
      });
    });
  }
}