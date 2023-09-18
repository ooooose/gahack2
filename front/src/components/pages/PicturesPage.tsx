import React from 'react';
import { usePictures } from '../../stores/usePictures';
import { Box, Center, Flex, Stack } from '@chakra-ui/react';
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
      <Stack direction={['column', 'row']} >
        {pictures.map((picture) => (
          <Center
            key={picture.id}
            display={'flex'}
            flexDirection={'column'}
            m={3}
            h={'330px'}
            bg="gray.50"
            position={'relative'}
          >
            <Box h={'30px'}>
              <Picture />
            </Box>
            <Box position={'absolute'} zIndex={5} bottom={3} gap={3} width={'75%'}>
              <Box float={'left'}>
                <Text>{picture.image}</Text>
              </Box>
              <Box float={'right'}>
                <Like picture={picture} currentUser={currentUser.authUserType} />
                {/* ここにコメントをいれる */}
              </Box>
            </Box>
          </Center>
        ))}
      </Stack>
    </>
  );
}

export default PicturesPage;
