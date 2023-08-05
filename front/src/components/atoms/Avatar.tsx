import React from 'react';
import { Avatar as ChakraAvatar } from '@chakra-ui/react';

// UserのAvatarをpropsで受け取る。Auth認証していたら使用のAvatarを使ってもらうよう条件分岐する。
// Memo化する！
const Avatar = () => {
  return (
    <>
      <ChakraAvatar src="https://bit.ly/broken-link" />
    </>
  );
};

export default Avatar;
