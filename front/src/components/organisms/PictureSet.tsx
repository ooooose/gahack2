import React from "react";
import { Box, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Text from '../atoms/Text';
import Picture from '../molecules/Picture';
import Like from '../molecules/Like';
import Comments from '../molecules/Comments';
import { useAuthUserState } from '../../globalStates/atoms/authUserState';
import { Picture as PictureType } from "../../types/pictures";

type Props = {
  picture: PictureType
  link: string
}

const PictureSet = ({ picture, link }: Props) => {
  const currentUser = useAuthUserState();
  return (
    <>
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
          <Link to={link}>
            <Picture />
          </Link>
        </Box>
        <Box
          position={'absolute'}
          zIndex={5}
          bottom={3}
          gap={3}
          width={'75%'}
        >
          <Box float={'left'}>
            <Text>{picture.image}</Text>
          </Box>
          <Box float={'right'} display={'flex'} gap={3}>
            <Like
              picture={picture}
              currentUser={currentUser.authUserType}
            />
            <Comments
              picture={picture}
              currentUser={currentUser.authUserType}
            />
          </Box>
        </Box>
      </Center>
    </>
  )
}

export default PictureSet;