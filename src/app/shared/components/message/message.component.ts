import { Component } from '@angular/core';
import { Message } from '../../interfaces/message';
import { ChatMessages } from '../../interfaces/chatMessages';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {

  messages: Message[] = []; // message for current conversation

  chatMessages: ChatMessages[] = [
    {
      uuid: "123",
      user: {
        uuid: '1',
        profileImage: "https://randomuser.me/api/portraits/women/57.jpg",
        firstName: "Lidia",
        lastName: "Popescu",
        email: "john@gmail.com"
      },
      lastMessage: "Description",
      isRead: false,
      createdAt: "2023-01-12",
    },
    {
      uuid: "456",
      user: {
        uuid: '2',
        profileImage: "https://randomuser.me/api/portraits/women/57.jpg",
        firstName: "Lidia",
        lastName: "Popescu",
        email: "john@gmail.com"
      },
      lastMessage: "Description ndnmabs dasbd k amsfd jahsdf lk  jsfhb sf hbsdfn  slksbdfm alksddfb",
      isRead: false,
      createdAt: "2023-01-12",
    }
  ];

  onIonInfinite(ev: any) {
    //   this.findLastNotifications();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
  // How to implement chat?
  // chat with all users and images -> inside we have message entity

}
