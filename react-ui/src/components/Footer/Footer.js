import React from 'react';
import {FOOTER_TEXT, LONG_FADE, MAIN_COLOR} from "../../constants";
import {NavLink as NavLinkRouter} from "react-router-dom";
import styled, {keyframes} from "styled-components";

export default ()=> {

  const fade = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
  `;

  const Footer = styled.footer`
    background-color: #fff;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    box-shadow: 0 -4px 4px rgba(0, 0, 0, 0.04);
    color: ${MAIN_COLOR};
    animation: ${fade} ${LONG_FADE + "s"} ease-in-out;
  `;

  const NavLink = styled(NavLinkRouter)`
    display: inline;
    color: ${MAIN_COLOR};
    text-decoration: none;
  `;

  return (
    <Footer>
      <NavLink to={"/about"}>{FOOTER_TEXT}</NavLink>
    </Footer>
  )

};
