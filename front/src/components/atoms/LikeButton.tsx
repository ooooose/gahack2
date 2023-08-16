import React, { useState } from 'react';
import { Box, chakra, Icon, Text, textDecoration, Tooltip } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Picture } from '../../types/pictures';
import { getLikes } from '../../stores/useLikes/getLikes';
import { apiClient } from '../../utils/api-client';

type LikeButtonProps = {
  picture: Picture;
  isLikedPicture?: Picture;
  generateParams: () => {
    pictureId: number;
  }
}

const LikeButton = ({ picture, generateParams }: LikeButtonProps) => {
  const { data, error, mutate } = getLikes();

  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;

  const handleLike = () => {
    // いいねのトグル処理を実装
    const updatedData = { ...data, liked: !data.liked };
    if (data.liked) {
      // deleteLike
    } else {
      apiClient.apiPost('/likes', { picture_id: picture.id })
    }
    // サーバーに更新を反映
    mutate(updatedData);
  }
  const controls = useAnimation();

  const MotionBox = motion(chakra.div);

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
            as={data.liked ? AiFillHeart : AiOutlineHeart}
            mr="2.5"
            fontSize="22px"
            color={data.liked ? 'red.400' : ''}
          />
        </MotionBox>
      </Tooltip>
      <Text pointerEvents={'none'}>{data.likes}</Text>
    </Box>
  )
}

export default LikeButton;

