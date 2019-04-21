import React from 'react';
import styled, {keyframes} from "styled-components";
import {FAST_FADE, TEXT_COLOR} from "../../constants";

export default ()=> {

  const fade = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
  `;

  const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    align-self: center;
    animation: ${fade} ${FAST_FADE + "s"} ease-in-out;
  `;

  const Error = styled.strong`
    font-size: 21px;
    font-weight: 500;
    color: ${TEXT_COLOR}
  `;


  return (
    <Container>
      <Error>
        No posts found...
      </Error>
    </Container>
  )

};
