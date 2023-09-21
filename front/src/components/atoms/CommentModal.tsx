import React, { useState } from 'react';
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
  Tooltip,
  Input,
  Button,
  HStack,
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
  const params = {
    picture_id: pictureId,
    body: comment,
  };
  const { trigger, isMutating } = usePostComment({ pictureId, params });
  const submitComment = () => {
    trigger();
    setComment('');
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing || e.key !== 'Enter' || comment.length === 0)
      return;
    submitComment();
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Tooltip label="コメント" bg="gray.400" fontSize="11px">
        <Box display={'flex'} gap={1}>
          <Icon
            as={BiComment}
            fontSize={20}
            onClick={onOpen}
            cursor={'pointer'}
          />
          <Text pointerEvents={'none'} fontSize={12}>
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
            <Box w={'100%'} h={'50vh'} overflowX={'auto'}>
              {comments.map((comment) => (
                <Comment comment={comment} key={comment.id} />
              ))}
            </Box>
          </ModalBody>
          <ModalFooter>
            {/* コメントフォームとSubmitボタンを設置予定 */}
            <Box width={'100%'} mx={'auto'}>
              <Input
                mb={2}
                type="text"
                placeholder="コメントを入力"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <Button
                float={'right'}
                colorScheme="blue"
                type="submit"
                variant="solid"
                onClick={() => {
                  submitComment();
                }}
                isDisabled={comment === '' ? true : false}
                isLoading={isMutating}
              >
                投稿する
              </Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CommentModal;
