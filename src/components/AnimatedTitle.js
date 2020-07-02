import React from "react";
// https://www.npmjs.com/package/react-animations
import { bounceInDown } from "react-animations";
// https://www.npmjs.com/package/react-rainbow-text
import RainbowText from "react-rainbow-text";
// https://www.npmjs.com/package/styled-components
import styled, { keyframes } from "styled-components";

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
