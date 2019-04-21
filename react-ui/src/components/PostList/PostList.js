import React, {PureComponent} from 'react';
import styled, {keyframes} from "styled-components";
import {NORMAL_FADE} from "../../constants";
import PostItem from "../PostItem/PostItem";
import NoFound from "../NoFound/NoFound";

class PostList extends PureComponent {

  render() {

    const {data, selectFilter} = this.props;
    return (
      <>
        {
          data.length !== 0 ?
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
            :
            <NoFound/>
        }
      </>
    );
  }

}

export default PostList;

const fade = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
  `;

const Container = styled.div`
    margin-top: 100px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 100%;
    height: 100%;
    animation: ${fade} ${NORMAL_FADE + "s"} ease-in-out;
  `;

