import React from 'react';
import {LOGO_NAME, MAIN_COLOR} from "../../constants";
import styled from "styled-components";
import {NavLink as NavLinkRouter} from "react-router-dom";

export default ()=> {

  const Container = styled.div`
    display: flex;
    align-items: center;
    margin-right: 50px;
    text-transform: uppercase;
  `;

  const Logo = styled(NavLinkRouter) `
    text-decoration: none;
    font-size: 18px;
    color: ${MAIN_COLOR};
    font-weight: 600;
  `;

  return (
    <Container>
      <Logo to={"/home"}>{LOGO_NAME}</Logo>
    </Container>
  )

};
