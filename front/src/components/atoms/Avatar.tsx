import React from 'react';
import { Avatar as ChakraAvatar, SkeletonCircle } from '@chakra-ui/react';

type AvatarType = {
  avatar: string | undefined;
};

// TODO: Avatarはページ遷移してもSkeletonにならないようにする。
// Memo化する！
const Avatar = ({ avatar }: AvatarType) => {
  return (
    <>{avatar ? <ChakraAvatar src={avatar} /> : <SkeletonCircle size="12" />}</>
  );
};

export default Avatar;
