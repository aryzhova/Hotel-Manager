import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Room } from './room.model';


@Injectable({
  providedIn: 'root'
})
export class HotelManagerService {

  narriottRewardsMember: boolean = false;
  guestName: string = "Anastasia";
  numberOfNights: number = 1;
  bookingDate: Date;
  isBookingValid = false;

  bookedRooms = {};

  roomsAvailable: Room[] = [
    new Room(0, 100, ['/assets/kingbed.jpg', '/assets/deluxe1.jpg','/assets/deluxe2.jpg'], 'Deluxe Room', '1 King bed, balcony, mountain view'),
    new Room(1, 150, ['/assets/familysuite.jpg', '/assets/family1.jpg', '/assets/family2.jpg'], 'Family Suite', '2 bedroom suite, 2 king beds, 2 bathrooms'),
    new Room(2, 200, ['/assets/presidentialsuite.jpg','/assets/pres1.jpg', '/assets/pres2.jpg'], 'Presidential Suite', 'Spacious suite, 1 king bed, mountain view')
  ];

  constructor(
    private storage: Storage
  ) { 
    this.initialize();
  }

  public saveSettings(){
    
    if (!this.guestName || !this.numberOfNights || !this.bookingDate) {
      this.isBookingValid = false;
    } else {
      const obj ={
        narriottRewardsMember: this.narriottRewardsMember,
        guestName: this.guestName,
        numberOfNights: this.numberOfNights,
        bookingDate: this.bookingDate,
        isBookingValid: true
      }

      this.isBookingValid = true;
      this.storage.set("settings", obj);
    }
  }

  promiseTest(): Promise<any> {
    return(new Promise((resolve, reject) => {

    }));
  }

  public async initialize(){
    const obj = await this.storage.get("settings");
    if(obj){
      this.narriottRewardsMember = obj.narriottRewardsMember;
      this.guestName = obj.guestName;
      this.numberOfNights = obj.numberOfNights;
      this.bookingDate = obj.bookingDate;
      this.isBookingValid = obj.isBookingValid;
    }
}


}


