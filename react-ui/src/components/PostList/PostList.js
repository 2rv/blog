import React from 'react';
import styled, {keyframes} from "styled-components";
import {NORMAL_FADE} from "../../constants";
import PostItem from "../PostItem/PostItem";

export default ({selectFilter, data}) => {

  return (
    <Container>
      {
        data.map((post, index)=> {


          return (
            <PostItem
              tagClick={selectFilter}
              key={index}
              post={post}
            />
          )

        })
      }
    </Container>
  );
};

const fade = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
  `;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    animation: ${fade} ${NORMAL_FADE + "s"} ease-in-out;
  `;
