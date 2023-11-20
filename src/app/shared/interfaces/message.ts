import { User } from "./user";

export interface Message {
  uuid: string;
  value: string;
  isRead: boolean;
  createdAt: string;
  sender: User;
  receiver: User;
}
