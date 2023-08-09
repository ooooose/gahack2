import React, { memo, ReactNode } from "react";
import styled from "@emotion/styled";
import { Image } from "@chakra-ui/react";

const PictureImg: React.FC = (props) => <img {...props} />;

const Picture = styled(PictureImg)`
  height: 18.75em;
  opacity: 0;
  transition: .25s;
  width: 25em;
  vertical-align: top;
  visibility: hidden;
  z-index: 10;
`

const PictureImage = memo(() => {
  return (
    <>
      <Picture />
    </>
  )
})

PictureImage.displayName = 'PictureImage';
export default PictureImage;