import { Picture } from '../pictures';

export type Theme = {
  id: number;
  title: string;
  pictures: Picture[];
};

export type ThemeListsProps = {
  themeItems: Theme[];
  isLoading: boolean;
};
