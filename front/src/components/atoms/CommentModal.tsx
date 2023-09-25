import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Icon,
  useDisclosure,
  Box,
  Text,
  FormControl,
  Tooltip,
  Input,
  Button,
} from '@chakra-ui/react';
import { BiComment } from 'react-icons/bi';
import { Comment as CommentType } from '../../types/comments';
import { usePostComment } from '../../stores/useComments/usePostComment';
import Comment from './Comment';

type Props = {
  pictureId: number;
  comments: CommentType[];
};

const CommentModal = ({ comments, pictureId }: Props) => {
  const [comment, setComment] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });
  const params = {
    picture_id: pictureId,
    body: comment,
  };

  const { trigger, isMutating } = usePostComment({ pictureId, params });

  const onSubmit = handleSubmit((data) => {
    if (data.body.trim() === '') {
      return;
    }
    trigger();
    setComment('');
    reset();
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.nativeEvent.isComposing ||
      e.key !== 'Enter' ||
      comment.length === 0 ||
      comment.trim() === ''
    )
      return;
    trigger();
    setComment('');
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Tooltip label="コメント" bg="gray.400" fontSize="11px">
        <Box display="flex" gap={1}>
          <Icon
            as={BiComment}
            fontSize={20}
            onClick={onOpen}
            cursor="pointer"
          />
          <Text pointerEvents="none" fontSize={12}>
            {comments.length}
          </Text>
        </Box>
      </Tooltip>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>コメント</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box w="100%" h="50vh" overflowX="auto">
              {comments.map((comment) => (
                <Comment
                  key={comment.id}
                  pictureId={pictureId}
                  comment={comment}
                />
              ))}
            </Box>
          </ModalBody>
          <ModalFooter>
            <Box width="100%" mx="auto">
              <form onSubmit={onSubmit}>
                <FormControl isInvalid={!!errors.body}>
                  <Input
                    id="body"
                    mb={2}
                    type="text"
                    {...register('body')}
                    placeholder="コメントを入力"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                </FormControl>
                {errors.body && (
                  <Text color="red.500" fontSize="sm">
                    {String(errors.body.message)}
                  </Text>
                )}
                <Button
                  float="right"
                  colorScheme="blue"
                  type="submit"
                  variant="solid"
                  isDisabled={!comment || isMutating}
                  isLoading={isMutating}
                >
                  投稿する
                </Button>
              </form>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const schema = z.object({
  body: z.string().nonempty({ message: '空文字のみの入力は無効です' }),
});

export default CommentModal;
