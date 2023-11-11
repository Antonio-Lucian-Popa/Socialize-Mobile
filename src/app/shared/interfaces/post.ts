import { User } from "./user";

export interface Post {
  id: number;
  description: string;
  createdAt: string;
  images: string[],
  user: User;
  userLikes: User;
  numberOfComments: number;
}
