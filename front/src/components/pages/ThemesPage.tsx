import React from 'react';
import { Box, Center, Stack } from '@chakra-ui/react';
import { useAuthUserState } from '../../globalStates/atoms/authUserState';
import { useGetThemes } from '../../stores/useThemes/useGetThemes';
import Text from '../atoms/Text';
import Picture from '../molecules/Picture';
import { Link } from 'react-router-dom';

function ThemesPage() {
  const currentUser = useAuthUserState();
  console.log(currentUser);
  const { data: themes } = useGetThemes();
  if (!themes) return <div>Loading...</div>;
  return (
    <>
      <Stack direction={['column', 'row']}>
        {themes.map((theme) => (
          <Center
            key={theme.id}
            display={'flex'}
            flexDirection={'column'}
            m={3}
            h={'330px'}
            bg="gray.50"
            position={'relative'}
          >
            <Box h={'30px'}>
              <Link to={`/themes/${theme.id}`}>
                <Picture />
              </Link>
            </Box>
            <Box
              position={'absolute'}
              zIndex={5}
              bottom={3}
              gap={3}
              width={'75%'}
            >
              <Text textAlign={'center'}>{theme.title}</Text>
            </Box>
          </Center>
        ))}
      </Stack>
    </>
  );
}

export default ThemesPage;
