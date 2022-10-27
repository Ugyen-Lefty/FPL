import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRoomComponent } from './create-room/create-room.component';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';

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
  }
  // { path: 'search/:query', component: FilteredVideosComponent },
  // { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
