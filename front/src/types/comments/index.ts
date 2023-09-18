import { Picture } from "../pictures";
import { User } from "../users";

export type Comment = {
  // id: number;
  body: string;
  createdAt: string;
  picture: Picture,
  user: User,
};
