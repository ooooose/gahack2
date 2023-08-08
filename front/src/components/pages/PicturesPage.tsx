import React from 'react';
import { usePictures } from '../../stores/usePictures';

function PicturesPage() {
  const { data: pictures } = usePictures();
  console.log(pictures);
  if (!pictures) return <div>Loading...</div>;
  return (
    <>
      {pictures.map((picture) => (
        <h1 key={picture.id}>{picture.image}</h1>
      ))}
    </>
  );
}

export default PicturesPage;
