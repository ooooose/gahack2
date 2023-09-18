import React from 'react';
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
} from '@chakra-ui/react';
import { BiComment } from 'react-icons/bi';
import { Comment } from '../../types/comments';

type Props = {
  comments: Comment[];
};

const CommentModal = ({ comments }: Props) => {
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
            <Box w={'90%'} h={'50vh'} overflowX={'auto'}>
              {comments.map((comment, index) => (
                <>
                  <Box key={index} m={3}>
                    <Text>{comment.user.name}さん</Text>
                    <Text>{comment.body}</Text>
                    {/* 右側にゴミ箱アイコンを設置予定 */}
                  </Box>
                  <hr />
                </>
              ))}
            </Box>
          </ModalBody>

          <ModalFooter>
            {/* コメントフォームとSubmitボタンを設置予定 */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CommentModal;
