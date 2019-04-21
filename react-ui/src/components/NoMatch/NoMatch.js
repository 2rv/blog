import React from 'react';
import {NavLink as NavLinkRouter} from "react-router-dom";
import styled, {keyframes} from "styled-components";
import {FAST_FADE, MAIN_COLOR, TEXT_COLOR} from "../../constants";

export default ({error})=> {

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
    font-size: 32px;
    color: ${TEXT_COLOR}
  `;

  const Icon = styled.div`
    text-align: center;
    font-size: 80px;
  `;

  const Back = styled(NavLinkRouter)`
    margin-top: 20px;
    text-align: center;
    font-size: 15px;
    font-weight: 500;
    color: ${MAIN_COLOR};
    transition: 0.5s;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    padding-bottom: 3px;
    
    :hover {
    border-color: ${MAIN_COLOR};
    opacity: 0.85;
    }
  `;

  return (
    <Container>
      <Error>
        <Icon><span role="img" aria-label="No files">📂</span></Icon>
        {error ? error : "Oops! Page not found "}
      </Error>
      <Back to={"/home"}>Back to home</Back>
    </Container>
  )

};
