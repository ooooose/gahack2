import React from 'react';
import { Box, HStack, Text, Icon } from '@chakra-ui/react';
import { Comment as CommentType } from '../../types/comments';
import { BiTrash } from 'react-icons/bi';

type Props = {
  comment: CommentType;
};

const Comment = ({ comment }: Props) => {
  const object = new Date(comment.created_at);
  const postedTime = object.toLocaleString();
  return (
    <Box>
      <HStack justifyContent={'space-between'}>
        <Box m={3}>
          <Text mb={2} fontWeight={'bold'}>
            {comment.user.name}さん
          </Text>
          <Text>{comment.body}</Text>
        </Box>
        <Box textAlign={'right'}>
          <Icon as={BiTrash} mr="1" cursor={'pointer'} fontSize="20px" />
          <Text fontSize={12}>{postedTime}</Text>
        </Box>
      </HStack>
      <hr />
    </Box>
  );
};

export default Comment;
