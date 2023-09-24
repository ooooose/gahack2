import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPictureById } from '../../stores/usePictures/useGetPictureById';
import { useAuthUserState } from '../../globalStates/atoms/authUserState';
import { Box, Center, HStack } from '@chakra-ui/react';
import Text from '../atoms/Text';
import Like from '../molecules/Like';
import Comments from '../molecules/Comments';
import Picture from '../molecules/Picture';

function PicturePage() {
  const { id } = useParams<{ id: string }>();
  const pictureId = id ?? '';
  const { data: picture } = useGetPictureById(pictureId);
  const currentUser = useAuthUserState();
  if (!picture) return <div>Loading...</div>;
  return (
    <HStack>
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
          <Box float={'right'} display={'flex'} gap={3}>
            <Like picture={picture} currentUser={currentUser.authUserType} />
            <Comments
              picture={picture}
              currentUser={currentUser.authUserType}
            />
          </Box>
        </Box>
      </Center>
    </HStack>
  );
}

export default PicturePage;
