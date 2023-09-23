import React from 'react';
import { useSWRConfig } from 'swr';
import { Box, HStack, Text, Icon } from '@chakra-ui/react';
import { Comment as CommentType } from '../../types/comments';
import { BiTrash } from 'react-icons/bi';
import { useDeleteComment } from '../../stores/useComments/useDeleteComment';
import { useAuthUserState } from '../../globalStates/atoms/authUserState';

type Props = {
  pictureId: number;
  comment: CommentType;
};

const Comment = ({ pictureId, comment }: Props) => {
  const currentUser = useAuthUserState();
  const object = new Date(comment.created_at);
  const params = {
    picture_id: pictureId,
  };
  const { mutate } = useSWRConfig();
  const handleDeleteComment = async () => {
    try {
      if (confirm('本当に削除しますか？')) {
        await useDeleteComment({ pictureId, comment, params });
        mutate(`/pictures/${pictureId}/comments`);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const postedTime = object.toLocaleString();
  return (
    <Box>
      <HStack justifyContent={'space-between'}>
        <Box m={3} w={'280px'}>
          <Text mb={2} fontWeight={'bold'}>
            {comment.user.name}さん
          </Text>
          <Text overflowWrap={'break-word'}>{comment.body}</Text>
        </Box>
        <Box textAlign={'right'} mr={2}>
          {currentUser.authUserType?.uid === comment.user.uid ? (
            <Icon
              as={BiTrash}
              onClick={handleDeleteComment}
              mr="1"
              cursor={'pointer'}
              fontSize="20px"
            />
          ) : (
            <></>
          )}
          <Text fontSize={12}>{postedTime}</Text>
        </Box>
      </HStack>
      <hr />
    </Box>
  );
};

export default Comment;
