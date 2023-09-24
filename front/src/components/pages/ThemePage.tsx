import React from 'react';
import { useParams } from 'react-router-dom';
import { Stack, VStack, Heading } from '@chakra-ui/react';
import { useGetThemeById } from '../../stores/useThemes/useGetThemeById';
import PictureSet from '../organisms/PictureSet';

function ThemePage() {
  const { id } = useParams<{ id: string }>();
  const themeId = id ?? '';
  const { data: theme } = useGetThemeById(themeId);
  if (!theme) return <>Loading...</>;
  return (
    <>
      <VStack>
        <Heading as="h3" size="lg" mb={3}>
          {theme.title}の部屋
        </Heading>
        <Stack direction={['column', 'row']}>
          {theme.pictures.map((picture) => (
            <PictureSet
              key={picture.id}
              picture={picture}
              link={`/pictures/${picture.id}`}
            />
          ))}
        </Stack>
      </VStack>
    </>
  );
}

export default ThemePage;
