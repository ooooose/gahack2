import React from 'react';
import FirstPictureFrame from '../atoms/FirstPictureFrame';
import { Stack, Flex, Box, Heading, useDisclosure } from '@chakra-ui/react';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import LoginModal from '../organisms/LoginModal';
import { useAuthUserState } from '../../globalStates/atoms/authUserState';

const TopPageMain = () => {
  const currentUser = useAuthUserState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '25%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.300',
                zIndex: -1,
              }}
            >
              画HACKへようこそ！
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            アプリ内で描いた絵を額縁に飾れるアプリです。
            <br />
            どんな画風の絵でも、額縁に飾れば映えるし、Twitterにクイズ投稿すればあなたの画才が注目されるチャンスかも！？
            <br />
            さぁ、絵を描いていこうぜ！！
          </Text>
          {currentUser.authUserType !== null ? (
            <></>
          ) : (
            <>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: 'column', sm: 'row' }}
              >
                <Button
                  rounded={'full'}
                  size={'lg'}
                  fontWeight={'normal'}
                  px={6}
                  colorScheme={'red'}
                  bg={'red.400'}
                  _hover={{ bg: 'red.500' }}
                  onClick={onOpen}
                >
                  ログイン
                </Button>
                <Button
                  rounded={'full'}
                  size={'lg'}
                  fontWeight={'normal'}
                  px={6}
                >
                  ゲストログイン
                </Button>
              </Stack>
            </>
          )}
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
          h={'full'}
        >
          <Box width={'full'} overflow={'hidden'}>
            <FirstPictureFrame />
          </Box>
        </Flex>
      </Stack>
      <LoginModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default TopPageMain;
