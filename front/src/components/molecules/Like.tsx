import React from 'react';
import Text from '../atoms/Text';
import { Picture } from '../../types/pictures';
import { Box, Spinner } from '@chakra-ui/react';
import { useGetLikes } from '../../stores/useLikes/useGetLikes';
import LikeButton from '../atoms/LikeButton';
import { AuthUser } from '../../types/users';

type Props = {
  picture: Picture;
  currentUser: AuthUser | null;
};

const Like = ({ picture, currentUser }: Props) => {
  const { data } = useGetLikes({ pictureId: picture.id });
  if (!data) return <Spinner size="xs" />;
  return (
    <>
      {currentUser !== null ? (
        <Box>
          <LikeButton
            picture={picture}
            isLiked={data?.liked}
            likes={data?.likes}
            likeId={data?.like_id}
          />
        </Box>
      ) : (
        <>
          <Text>いいねできません</Text>
        </>
      )}
    </>
  );
};

export default Like;
