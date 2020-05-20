import React from "react";
import styled, { keyframes } from "styled-components";
import { bounceInDown } from "react-animations";
import RainbowText from "react-rainbow-text";

const bounce = keyframes`${bounceInDown}`;
const BounceDiv = styled.div`
  animation: 1.5s ${bounce};
`;

const AnimatedTitle = () => {
  return (
    <>
      <BounceDiv>
        <h1 className="display-1 text-center">
          <RainbowText lightness={0.5} saturation={1}>
            Background Generator
          </RainbowText>
        </h1>
      </BounceDiv>
    </>
  );
};

export default AnimatedTitle;
