import type { HTMLChakraProps } from '@chakra-ui/react'
import { Box, chakra, Icon, Text, Tooltip } from '@chakra-ui/react'
import type { HTMLMotionProps } from 'framer-motion'
import { motion, useAnimation } from 'framer-motion'
import { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

export type LikeButtonProps = {
  pictureId?: number
}

const LikeButton = ({ pictureId }: LikeButtonProps) => {
  const [isLike, setIsLike] = useState(false)
  const controls = useAnimation()

  const toggleLike = () => {
    setIsLike(!isLike)
    controls.start({ scale: [1, 1.3, 1.6, 1.3, 1] })
  }

  const MotionBox = motion(chakra.div)

  return (
    <Box display="flex" alignItems="center" color="gray.500">
      <Tooltip label="いいね" bg="gray.400" fontSize="11px">
        <MotionBox
          cursor="pointer"
          onClick={toggleLike}
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
    </Box>
  )
}

export default LikeButton;

