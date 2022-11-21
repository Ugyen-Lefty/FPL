import { ApiService } from './../api.service';
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
  money: any;
  isLoading = true;
  data: string[] = ['8', '10'];

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    this.api.getById('9gOXciTrKZgmLyATFYgG').subscribe(res => {
      this.userStats = res;
    });
    if (this.route.snapshot.queryParams['data']) {
      this.isLoading = false;
      this.money = JSON.parse(this.route.snapshot.queryParams['data'] || '');
      this.api.updateUserMoney(this.money, '9gOXciTrKZgmLyATFYgG');
      Swal.fire({
        title: `You have claimed ${this.money['money']} Euros!`,
        timer: 2000,
        toast: true,
        showConfirmButton: false,
        icon: "success",
      });
      // this.data.push('8');
    }
  }

}
