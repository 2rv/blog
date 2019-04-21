import React, { PureComponent} from 'react';
import styled, {keyframes} from 'styled-components'
import {HEADER_HEIGHT, NORMAL_FADE} from "../../constants";
import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";
import Search1 from "../Search/Search";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

const Search = withRouter(Search1);


class Header extends PureComponent {

  render() {
    const {scrollingDirection, oldOffset} = this.props;


    return (
      <Container
        className="fade 2s"
        style={{
          top: scrollingDirection === "down" && oldOffset > 80 ? -HEADER_HEIGHT + "px" : 0
        }}>
        <Content>
          <Logo/>
          <Menu links={[
            {text: "All posts", link: "/home"},
            {text: "About me", link: "/about"},
          ]}/>
          <Search/>
        </Content>
      </Container>
    );
  }

}

const mapStateToProps = store => {
  return {
    scrollingDirection: store.scrollingPage.scrollingDirection,
    oldOffset: store.scrollingPage.oldOffset
  }
};

export default connect(mapStateToProps)(Header);

const fade = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
  `;

const Container = styled.header`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
    padding: 15px 10px;
    position: fixed;
    transition: 0.5s ease-in-out;
    opacity: 0.97;
    z-index: 1;
    height: ${HEADER_HEIGHT + "px"};
    min-width: auto;
    animation: ${fade} ${NORMAL_FADE + "s"} ease-in-out;
  `;

const Content = styled.div`
    overflow-x: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 15px;
  `;
