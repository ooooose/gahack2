import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

type Props = {
  children: ReactNode;
};

const OuterFrame = styled.div`
  background-color: #eefbf8;
  background-image: radial-gradient(
      circle,
      hsla(0, 0%, 100%, 0.1),
      hsla(0, 0%, 0%, 0.75)
    ),
    linear-gradient(left, transparent 50%, hsla(0, 0%, 0%, 0.01) 50%);
  background-position:
    50% 75%,
    50% 50%;
  background-repeat: no-repeat, repeat;
  background-size:
    150% 150%,
    3em 3em;
  font-size: 100%;
  min-height: 100%;
`;

const Frame = styled.ul`
  background-color: #fff;
  box-shadow:
    inset 0 0 2px hsla(0, 0%, 0%, 0.2),
    0 3px 1px hsla(0, 0%, 100%, 0.75),
    0 -1px 1px 2px hsla(0, 0%, 0%, 0.1);
  height: 18.75em;
  left: 50%;
  margin: -9.875em -13em;
  padding: 0.5em;
  position: absolute;
  top: 50%;
  width: 25em;
  &:before {
    background-color: #22130c;
    bottom: -2.5em;
    box-shadow:
      inset 0 1px 1px 1px hsla(0, 0%, 100%, 0.2),
      inset 0 -2px 1px hsla(0, 0%, 0%, 0.4),
      0 5px 50px hsla(0, 0%, 0%, 0.25),
      0 20px 20px -15px hsla(0, 0%, 0%, 0.2),
      0 30px 20px -15px hsla(0, 0%, 0%, 0.15),
      0 40px 20px -15px hsla(0, 0%, 0%, 0.1);
    content: '';
    left: -2.5em;
    position: absolute;
    right: -2.5em;
    top: -2.5em;
    z-index: -1;
  }
  &:after {
    background-color: #fff5e5;
    bottom: -1.5em;
    box-shadow:
      0 2px 1px hsla(0, 0%, 100%, 0.2),
      0 -1px 1px 1px hsla(0, 0%, 0%, 0.4),
      inset 0 2px 3px 1px hsla(0, 0%, 0%, 0.2),
      inset 0 4px 3px 1px hsla(0, 0%, 0%, 0.2),
      inset 0 6px 3px 1px hsla(0, 0%, 0%, 0.1);
    content: '';
    left: -1.5em;
    position: absolute;
    right: -1.5em;
    top: -1.5em;
    z-index: -1;
  }
`;

const InnerFrame = styled.li`
  box-shadow: 0 -1px 0 2px hsla(0, 0%, 0%, 0.03);
  list-style: none;
  position: absolute;
`;

const FirstPictureFrame = ({ children }: Props) => {
  return (
    <>
      <OuterFrame>
        <Frame>
          <InnerFrame>{children}</InnerFrame>
        </Frame>
      </OuterFrame>
    </>
  );
};

export default FirstPictureFrame;
