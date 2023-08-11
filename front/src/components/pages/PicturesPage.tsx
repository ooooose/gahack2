import React from 'react';
import { usePictures } from '../../stores/usePictures';
import { Box, Center } from '@chakra-ui/react';
import Text from '../atoms/Text';
import Picture from '../molecules/Picture';

function PicturesPage() {
  const { data: pictures } = usePictures();
  if (!pictures) return <div>Loading...</div>;
  return (
    <>
      {/* 幅によって並ぶ個数を変えたい */}
      <Box display={'flex'}>
        {pictures.map((picture) => (
          <Center key={picture.id} display={'flex'} flexDirection={'column'}>
            <Box h={'150px'}>
              <Picture />
            </Box>
            <Text>{picture.image}</Text>
          </Center>
        ))}
      </Box>
    </>
  );
}

export default PicturesPage;
