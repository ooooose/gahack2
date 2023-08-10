import React from 'react';
import { usePictures } from '../../stores/usePictures';
import { Box } from '@chakra-ui/react';
import Picture from '../molecules/Picture';

function PicturesPage() {
  const { data: pictures } = usePictures();
  if (!pictures) return <div>Loading...</div>;
  return (
    <>
      {/* 幅によって並ぶ個数を変えたい */}
      <Box display={'flex'}>
        {pictures.map((picture) => (
          <Box key={picture.id} >
            <Picture />
            <h1>{picture.image}</h1>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default PicturesPage;