import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPictureById } from '../../stores/usePictures/useGetPictureById';
import { HStack } from '@chakra-ui/react';
import PictureSet from '../organisms/PictureSet';

function PicturePage() {
  const { id } = useParams<{ id: string }>();
  const pictureId = id ?? '';
  const { data: picture } = useGetPictureById(pictureId);
  if (!picture) return <div>Loading...</div>;
  return (
    <HStack>
      <PictureSet picture={picture} link={''} />
    </HStack>
  );
}

export default PicturePage;
