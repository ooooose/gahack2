import React from 'react';
import { Box, chakra, Icon, Text, Tooltip } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Picture } from '../../types/pictures';
import { useToggleLike } from '../../stores/useLikes/useToggleLike';

type LikeButtonProps = {
  picture: Picture;
  likeId: number;
  isLiked: boolean;
  likes: number;
};

const LikeButton = ({ picture, likeId, isLiked, likes }: LikeButtonProps) => {
  const toggleProps = {
    isLiked: isLiked,
    likeId: likeId,
    params: {
      picture_id: picture.id,
    },
  };
  const { trigger } = useToggleLike(toggleProps);
  const controls = useAnimation();

  const MotionBox = motion(chakra.div);

  return (
    <Box display="flex" alignItems="center" color="gray.500">
      <Tooltip label="いいね" bg="gray.400" fontSize="11px">
        <MotionBox
          cursor="pointer"
          onClick={() => {
            trigger();
          }}
          animate={controls}
          transition={{ duration: 0.2 }}
        >
          <Icon
            as={isLiked ? AiFillHeart : AiOutlineHeart}
            mr="2.5"
            fontSize="22px"
            color={isLiked ? 'red.400' : ''}
          />
        </MotionBox>
      </Tooltip>
      <Text pointerEvents={'none'}>{likes}</Text>
    </Box>
  );
};

export default LikeButton;
