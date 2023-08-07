import { Comment } from "../comments";

export type Picture = {
  id: number;
  image: string;
  frameId: number;
  createdAt: string;
  comments: Comment[]
};

export type PictureListsProps = {
  themeItems: Picture[];
  isLoading: boolean;
};