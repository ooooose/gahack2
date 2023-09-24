import React from "react";
import { useAuthUserState } from "../../globalStates/atoms/authUserState";
import {
  Stack,
  Text,
  Box,
  HStack,
} from '@chakra-ui/react'
import { Picture } from "../../types/pictures";
import Comments from "./Comments";
import Like from "./Like";

type Props = {
  title: string
  picture: Picture
}

const PictureMenu = ({ title, picture }: Props) => {
  const currentUser = useAuthUserState();
  const object = new Date(picture.created_at);
  const postedTime = object.toLocaleString();
  return (
    <Box mt={'150px'}>
      <Stack
        boxShadow={'2xl'}
        border={'1px solid lightgray'}
        bg={'white'}
        px={8}
        py={4}
        spacing={8}
        align={'center'}>
        <Box w={'300px'}>
          <Box>
            <HStack justifyContent={'space-between'}>
              <Text fontSize={'18px'}>{title}</Text>
              <Box float={'right'} display={'flex'} gap={3}>
                <Like
                  picture={picture}
                  currentUser={currentUser.authUserType}
                />
                <Comments
                  picture={picture}
                  currentUser={currentUser.authUserType}
                />
              </Box>
            </HStack>
            <Box mt={3}>
              <Text fontSize={14}>
                {/* 作品の説明をおくよてい。 */}
              </Text>
            </Box>
            <HStack justifyContent={'space-between'} mt={2}>
              <Text fontSize={'14px'}>{picture.user.name} 作</Text>
              <Text fontSize={'14px'}>{postedTime}</Text>
            </HStack>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default PictureMenu;