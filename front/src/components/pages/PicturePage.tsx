import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPictureById } from '../../stores/usePictures/useGetPictureById';
import { VStack } from '@chakra-ui/react';
import PictureMenu from '../molecules/PictureMenu';
import Picture from '../molecules/Picture';


function PicturePage() {
  const { id } = useParams<{ id: string }>();
  const pictureId = id ?? '';
  const { data: picture } = useGetPictureById(pictureId);
  if (!picture) return <div>Loading...</div>;
  return (
    <VStack h={'200px'}>
      <Picture />
      <PictureMenu title={picture.theme.title} picture={picture} />
    </VStack>
  );
}

export default PicturePage;
