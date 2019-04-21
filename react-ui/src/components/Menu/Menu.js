import React from 'react';
import {NavLink as NavLinkRouter} from "react-router-dom";
import {TEXT_COLOR_LIGHT, TEXT_COLOR,MAIN_COLOR} from "../../constants";
import styled from "styled-components";

export default ({links})=> {

  const NavLink = styled(NavLinkRouter)`
    margin-right: 30px;
    font-size: 18px;
    color: ${TEXT_COLOR};
    text-decoration: none;
    transition: 0.7s;
    min-height: 24px;
    display: flex;
    align-items: center;
    white-space: nowrap;
    
    &:hover {
      color: ${TEXT_COLOR_LIGHT};
    }
    &.active {
      color: ${MAIN_COLOR}
    }
  `;

  const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 1;
  `;

  return (
    <Nav>
      {
        links.map(({text, link}, index) =>
          <NavLink
            key={index}
            to={link}>
            {text}
          </NavLink>
        )
      }
    </Nav>
  )
};
