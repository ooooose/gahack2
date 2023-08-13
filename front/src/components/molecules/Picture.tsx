import React from 'react';
import { Box } from '@chakra-ui/react';
import FirstPictureFrame from '../atoms/FirstPictureFrame';

// frameIdに基づいてフレームを変える！Boxのカスタマイズもやる予定。
const Picture = () => {
  return (
    <>
      <Box position="relative" w={'400px'} fontSize={'10px'}>
        <FirstPictureFrame />
      </Box>
    </>
  );
};

export default Picture;
