import { Component, OnInit } from '@angular/core';
import { HotelManagerService } from '../hotel-manager.service';
import { Room } from '../room.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  bookedRooms: Room[];

  constructor(
    private hotelmanager: HotelManagerService
  ) {}

  ngOnInit() {
    this.initComponent();
  }

  ionViewWillEnter() {
    this.initComponent();
  }

  initComponent() {
    this.bookedRooms = this.hotelmanager.roomsAvailable.filter(room => {
      return this.hotelmanager.bookedRooms[room.id];
    });
  }

  onCancelBooking() {
    this.hotelmanager.bookedRooms = {};
    this.bookedRooms = [];
  }
}
