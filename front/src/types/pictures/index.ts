import { Comment } from '../comments';
import { Like } from '../likes';

export type Picture = {
  id: number;
  image: string;
  frameId: number;
  createdAt: string;
  comments?: Comment[];
  likes?: Like[];
};

export type PictureListsProps = {
  themeItems: Picture[];
  isLoading: boolean;
};
