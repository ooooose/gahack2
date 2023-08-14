import { Comment } from '../comments';

export type Picture = {
  id: number;
  image: string;
  frameId: number;
  createdAt: string;
  comments?: Comment[];
  likes?: Like[];
};

export type Like = {
  id: number;
  pictureId: number;
  userId: number;
}

export type PictureListsProps = {
  themeItems: Picture[];
  isLoading: boolean;
};
