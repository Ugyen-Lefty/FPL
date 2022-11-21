import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {

  userStats: any;
  isLoading = true;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot.params) {
      this.isLoading = false;
      this.userStats = JSON.parse(this.route.snapshot.queryParams['data']);
      // JSON.parse(this.userStats);
      // Swal.fire({
      //   title: `You have claimed ${this.userStats}!`,
      //   timer: 2000,
      //   toast: true,
      //   showConfirmButton: false,
      //   icon: "success",
      // });
    }
  }

}
