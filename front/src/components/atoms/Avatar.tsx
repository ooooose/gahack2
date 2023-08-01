import React from "react";
import { Box, Avatar as ChakraAvatar } from "@chakra-ui/react";

// UserのAvatarをpropsで受け取る。Auth認証していたら使用のAvatarを使ってもらうよう条件分岐する。
// Memo化する！
const Avatar = () => {
  return (
    <>
      <Box p={2}>
        <ChakraAvatar src='https://bit.ly/broken-link' />
      </Box>
    </>
  )
}

export default Avatar;