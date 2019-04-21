import React from 'react';
import styled from "styled-components";
import {HEADER_HEIGHT, SCREEN_BIG} from "../../constants";

export default ({children})=> {

  const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: stretch;
    flex-direction: column;
    width: 100%;
    min-height: calc(100vh - ${HEADER_HEIGHT + "px"});
    padding: ${HEADER_HEIGHT + 80 + "px"} 25px 120px 25px;
  `;

  const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-grow: 1;
    max-width: ${SCREEN_BIG + "px"};
  `;

  return (

    <Container>
      <Content>
        {children}
      </Content>
    </Container>

  )

};
