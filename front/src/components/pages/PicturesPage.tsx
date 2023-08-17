import React from 'react';
import { usePictures } from '../../stores/usePictures';
import { Box, Center, Flex } from '@chakra-ui/react';
import Text from '../atoms/Text';
import Picture from '../molecules/Picture';
import Like from '../molecules/Like';
import { useAuthUserState } from '../../globalStates/atoms/authUserState';

function PicturesPage() {
  const currentUser = useAuthUserState();
  const { data: pictures } = usePictures();
  if (!pictures) return <div>Loading...</div>;
  return (
    <>
      {/* 幅によって並ぶ個数を変えたい */}
      <Box display={'flex'}>
        {pictures.map((picture) => (
          <Center
            key={picture.id}
            display={'flex'}
            flexDirection={'column'}
            m={3}
            h={'350px'}
            bg="gray.50"
            position={'relative'}
          >
            <Box h={'50px'}>
              <Picture />
            </Box>
            <Flex position={'absolute'} zIndex={5} bottom={3} gap={3}>
              <Text>{picture.image}</Text>
              <Like picture={picture} currentUser={currentUser.authUserType} />
            </Flex>
          </Center>
        ))}
      </Box>
    </>
  );
}

export default PicturesPage;
