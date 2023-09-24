import React from 'react';
import { useGetPictures } from '../../stores/usePictures/useGetPictures';
import { Stack } from '@chakra-ui/react';
import PictureSet from '../organisms/PictureSet';

function PicturesPage() {
  const { data: pictures } = useGetPictures();
  if (!pictures) return <div>Loading...</div>;
  return (
    <>
      {/* 幅によって並ぶ個数を変えたい */}
      <Stack direction={['column', 'row']}>
        {pictures.map((picture) => (
          <PictureSet
            key={picture.id}
            picture={picture}
            link={`/pictures/${picture.id}`}
          />
        ))}
      </Stack>
    </>
  );
}

export default PicturesPage;
