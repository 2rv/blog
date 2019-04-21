import React from 'react';
import {SCREEN_MEDIUM, TEXT_COLOR} from "../../constants";
import styled from "styled-components";
import Categories from "../Categories/Categories";

export default ({selectFilter, filter})=> {

  return (

    <Container>
      <Heading>
        <Text>All my posts </Text>
      </Heading>
      <Categories
        selectFilter={selectFilter}
        filter={filter}/>
    </Container>
  )

};

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    
    @media (max-width: ${SCREEN_MEDIUM+"px"}) {
      flex-direction: column;
    }
  `;

const Heading = styled.h1`
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `;

const Text = styled.span`
    text-transform: uppercase;
    font-weight: 700;
    font-size: 45px;
    color: ${TEXT_COLOR}
  `;
