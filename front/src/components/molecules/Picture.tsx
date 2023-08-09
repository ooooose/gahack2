import React from 'react';
import { Image } from '@chakra-ui/react';
import PictureImage from '../atoms/PictureImage';
import FirstPictureFrame from '../atoms/FirstPictureFrame';

type PictureProps = React.ComponentProps<typeof Image>;

const Picture = ({ ...props }: PictureProps) => {
  return (
    <>
      <FirstPictureFrame>
        <PictureImage {...props} />
      </FirstPictureFrame>
    </>
  );
};

export default Picture;
