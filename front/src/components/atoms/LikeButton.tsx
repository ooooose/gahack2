import React, { useState } from 'react';
import { Box, chakra, Icon, Text, textDecoration, Tooltip } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Picture } from '../../types/pictures';
import { deleteLike } from '../../stores/useLikes/deleteLike';
import { postLike } from '../../stores/useLikes/postLike';

type LikeButtonProps = {
  picture: Picture;
  generateParams: () => {
    pictureId: number;
  }
}

const LikeButton = ({ picture, generateParams }: LikeButtonProps) => {
  const [isLike, setIsLike] = useState<boolean>(false);
  const [likes, setLikes] = picture.likes ? useState<number>(picture.likes.length) : useState<number>(0) ;
  const controls = useAnimation();
  const params = generateParams();
  const { trigger: like } = postLike(params);
  const { trigger: unlike } = deleteLike(params);

  const MotionBox = motion(chakra.div);
  const handleLike = () => {
    if (isLike) {
      unlike();
      setIsLike(false);
      setLikes((prev) => --prev);
    } else {
      like();
      setIsLike(true);
      setLikes((prev) => ++prev);
    }
  };

  return (
    <Box display="flex" alignItems="center" color="gray.500">
      <Tooltip label="いいね" bg="gray.400" fontSize="11px">
        <MotionBox
          cursor="pointer"
          onClick={() => {
            handleLike();
          }}
          animate={controls}
          transition={{ duration: 0.2 }}
        >
          <Icon
            as={isLike ? AiFillHeart : AiOutlineHeart}
            mr="2.5"
            fontSize="22px"
            color={isLike ? 'red.400' : ''}
          />
        </MotionBox>
      </Tooltip>
      <Text pointerEvents={'none'}>{likes}</Text>
    </Box>
  )
}

export default LikeButton;

