import React from 'react';
import { Box, chakra, Icon, Text, Tooltip } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Picture } from '../../types/pictures';
import { useSWRConfig } from 'swr';
import { apiClient } from '../../utils/api-client';

type LikeButtonProps = {
  picture: Picture;
  likeId: number;
  isLiked: boolean;
  likes: number;
};

const toggleLike = async (
  likeId: number,
  isLiked: boolean,
  params: { picture_id: number },
) => {
  isLiked
    ? await apiClient.apiDelete(`/likes/${likeId}`, params)
    : await apiClient.apiPost(`/likes`, params);
};

const LikeButton = ({ picture, likeId, isLiked, likes }: LikeButtonProps) => {
  const { mutate } = useSWRConfig();
  const handleToggleLike = async () => {
    const params = {
      picture_id: picture.id,
    };
    try {
      await toggleLike(likeId, isLiked, params);
      mutate(`/pictures/${picture.id}/likes`);
    } catch (e) {
      console.log(e);
    }
  };
  const controls = useAnimation();

  const MotionBox = motion(chakra.div);

  return (
    <Box display="flex" alignItems="center" color="gray.500">
      <Tooltip label="いいね" bg="gray.400" fontSize="11px">
        <MotionBox
          cursor="pointer"
          onClick={() => {
            handleToggleLike();
          }}
          animate={controls}
          transition={{ duration: 0.2 }}
        >
          <Icon
            as={isLiked ? AiFillHeart : AiOutlineHeart}
            mr="1"
            fontSize="20px"
            color={isLiked ? 'red.400' : ''}
          />
        </MotionBox>
      </Tooltip>
      <Text pointerEvents={'none'} fontSize={12}>
        {likes}
      </Text>
    </Box>
  );
};

export default LikeButton;
