import { Picture } from '../pictures';
import { User } from '../users';

export type Comment = {
  id: number;
  body: string;
  created_at: string;
  picture: Picture;
  user: User;
};
