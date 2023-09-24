import React from "react";
import { useParams } from "react-router-dom";
import { Box, Center, Stack, VStack, Heading } from '@chakra-ui/react';
import { useGetThemeById } from "../../stores/useThemes/useGetThemeById";
import { useAuthUserState } from "../../globalStates/atoms/authUserState";
import Picture from "../molecules/Picture";
import Text from "../atoms/Text";
import Like from "../molecules/Like";
import Comments from "../molecules/Comments";

function ThemePage() {
  const { id } = useParams<{ id: string }>();
  const themeId = id ?? ''
  const { data: theme } = useGetThemeById(themeId)
  const currentUser = useAuthUserState();
  if (!theme) return <>Loading...</>
  return (
    <>
      <VStack>
        <Heading as='h3' size='lg' mb={3}>{theme.title}の部屋</Heading>
        <Stack direction={['column', 'row']}>
            {theme.pictures.map((picture) => (
              <Center
                key={picture.id}
                display={'flex'}
                flexDirection={'column'}
                m={3}
                h={'330px'}
                bg="gray.50"
                position={'relative'}
              >
                <Box h={'30px'}>
                  <Picture />
                </Box>
                <Box
                  position={'absolute'}
                  zIndex={5}
                  bottom={3}
                  gap={3}
                  width={'75%'}
                >
                  <Box float={'left'}>
                    <Text>{picture.image}</Text>
                  </Box>
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
                </Box>
              </Center>
            ))}
        </Stack>
      </VStack>
    </>
  )
}

export default ThemePage