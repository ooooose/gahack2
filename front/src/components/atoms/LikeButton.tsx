import React, { useState } from 'react';
import { Box, chakra, Icon, Text, textDecoration, Tooltip } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Picture } from '../../types/pictures';
import { getLikes } from '../../stores/useLikes/getLikes';

type LikeButtonProps = {
  trigger: () => Promise<any>;
  isMutating: boolean;
  isLiked: boolean;
  likes: number;
}

const LikeButton = ({ trigger, isMutating, isLiked, likes }: LikeButtonProps) => {

  const controls = useAnimation();

  const MotionBox = motion(chakra.div);

  return (
    <Box display="flex" alignItems="center" color="gray.500">
      <Tooltip label="いいね" bg="gray.400" fontSize="11px">
        <MotionBox
          cursor="pointer"
          onClick={trigger}
          animate={controls}
          transition={{ duration: 0.2 }}
          _disabled={isMutating}
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
  )
}

export default LikeButton;

