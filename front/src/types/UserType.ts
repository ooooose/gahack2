export type User = {
  avatar: string;
  description: string;
  name: string;
  twitterName: string;
  uid: string;
};

export type UserType = {
  id: string;
  attributes: {
    avatar: string;
    description: string;
    name: string;
    twitter_name: string;
    uid: string;
  };
  type: 'user';
};

export type ResponseUserType = {
  data: UserType;
};
