import { Comment } from '../comments';
import { Like } from '../likes';
import { Theme } from '../themes';
import { User } from '../users';

export type Picture = {
  id: number;
  image: string;
  frameId: number;
  created_at: string;
  comments?: Comment[];
  theme: Theme
  user: User
  likes?: Like[];
};

export type PictureListsProps = {
  themeItems: Picture[];
  isLoading: boolean;
};
