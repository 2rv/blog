import React from 'react';
import {LIGHT_COLOR, MAIN_COLOR, TEXT_COLOR} from "../../constants";
import styled from "styled-components";


export default ({search, change, value})=> {

  return (

    <Container>
      <Input onChange={(e)=> {change(e)}} value={value}/>
      <Button onClick={()=> search()}>Start</Button>
    </Container>

  )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    box-shadow: 0px 4px 12px rgba(0,0,0,0.05);
    height: 50px;
    border-radius: 100px;
    position: relative;
  `;

const Input = styled.input`
    width: 100%;
    flex-grow: 1;
    background-color: transparent;
    padding: 0 20px;
    color: ${TEXT_COLOR};
    font-size: 16px;
    
  `;

const Button = styled.div`
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    color: ${MAIN_COLOR};
    font-weight: 500;
    cursor: pointer;
    transition: 0.7s;
    
    &:hover {
      background-color: ${LIGHT_COLOR};
    }
  `;
