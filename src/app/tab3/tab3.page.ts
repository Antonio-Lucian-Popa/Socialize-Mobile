import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { NotificationService } from '../shared/services/notification.service';
import { Notification } from '../shared/interfaces/notification';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  notifications: Notification[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    //this.generateItems();
    this.findLastNotifications();
  }

  findLastNotifications() {
    this.notificationService.findLastNotifications().subscribe((notifications: Notification[]) => {
      this.notifications = notifications;
    });
  }


  onIonInfinite(ev: any) {
    this.findLastNotifications();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

}
