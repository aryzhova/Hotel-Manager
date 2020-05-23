import { Component } from '@angular/core';
import { HotelManagerService} from '../hotel-manager.service';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Plugins, Capacitor } from '@capacitor/core';

const { Haptics } = Plugins;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public hotelmanager: HotelManagerService, private router: Router) {}

  onBook(roomId) {
    if (this.hotelmanager.isBookingValid) {
      this.hotelmanager.bookedRooms[roomId] = true;
      Haptics.vibrate();
    }
  }

  onBookedClicked(room) {
    this.hotelmanager.bookedRooms[room.id] = false;
  }
}





