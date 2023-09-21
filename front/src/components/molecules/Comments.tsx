import React from 'react';
import { Box, Text, Spinner } from '@chakra-ui/react';
import CommentModal from '../atoms/CommentModal';
import { Picture } from '../../types/pictures';
import { AuthUser } from '../../types/users';
import { useGetComments } from '../../stores/useComments/useGetComments';

type Props = {
  picture: Picture;
  currentUser: AuthUser | null;
};

const Comments = ({ picture, currentUser }: Props) => {
  const { data: comments } = useGetComments({ pictureId: picture.id });
  if (!comments) return <Spinner size="xs" />;
  return (
    <>
      {currentUser !== null ? (
        <Box>
          <CommentModal comments={comments} pictureId={picture.id} />
        </Box>
      ) : (
        <>
          <Text>コメントできません</Text>
        </>
      )}
    </>
  );
};

export default Comments;
