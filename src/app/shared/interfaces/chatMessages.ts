import { User } from "./user";

export interface ChatMessages {
  uuid: string;
  user: User;
  lastMessage: string;
  isRead: false;
  createdAt: string;
}
