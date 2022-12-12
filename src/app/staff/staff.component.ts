import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  staffs: any = [
    {
      image: 'assets/images/staff1.jpeg',
      title: 'Assistant Coach',
      description: 'Can help you coach your players',
      points: 4
    },
    {
      image: 'assets/images/doctor.jpeg',
      title: 'Team Doctor',
      description: 'Can heal anyone',
      points: 4
    },
    {
      image: 'assets/images/psycho.jpeg',
      title: 'Psychologist',
      description: 'Can help your team mentally boost',
      points: 4
    },
    {
      image: 'assets/images/manager.webp',
      title: 'PR Manager',
      description: 'Can help your player manage properly',
      points: 4
    }
  ];

  main = [
    {
      name: 'player',
      skill: 1
    },
    {
      name: 'player',
      skill: 1
    },
    {
      name: 'player',
      skill: 1
    },
    {
      name: 'player',
      skill: 1
    },
    {
      name: 'player',
      skill: 1
    },
    {
      name: 'player',
      skill: 1
    },
    {
      name: 'player',
      skill: 1
    },
    {
      name: 'player',
      skill: 1
    },
    {
      name: 'player',
      skill: 1
    },
    {
      name: 'player',
      skill: 1
    },
    {
      name: 'player',
      skill: 1
    }
  ];

  subs = [{
    name: 'player',
    skill: 1
  },
  {
    name: 'player',
    skill: 1
  },
  {
    name: 'player',
    skill: 1
  },
  {
    name: 'player',
    skill: 1
  },
  {
    name: 'player',
    skill: 1
  },
  {
    name: 'player',
    skill: 1
  }];

  userStats: any;
  index: any;

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.index = this.route.snapshot.queryParams['index'];
    this.api.getById('9gOXciTrKZgmLyATFYgG').subscribe(res => {
      this.userStats = res;
    });
  }

}
