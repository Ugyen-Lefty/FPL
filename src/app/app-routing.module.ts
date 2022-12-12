import { SponsorsComponent } from './sponsors/sponsors.component';
import { JoinRoomComponent } from './join-room/join-room.component';
import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRoomComponent } from './create-room/create-room.component';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'create-room/:room-id',
    component: CreateRoomComponent
  },
  {
    path: 'create-room/:room-id/space',
    component: RoomComponent
  },
  {
    path: 'join-room',
    component: JoinRoomComponent
  },
  {
    path: 'sponsor',
    component: SponsorsComponent
  },
  {
    path: 'staff',
    component: StaffComponent
  },
  // { path: 'search/:query', component: FilteredVideosComponent },
  // { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
