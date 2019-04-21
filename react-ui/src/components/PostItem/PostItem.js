import React from 'react';
import {BORDER_COLOR, MAIN_COLOR, SCREEN_BIG, SCREEN_SMALL, TEXT_COLOR, TEXT_COLOR_LIGHT} from "../../constants";
import styled from "styled-components";
import {NavLink as NavLinkRouter} from "react-router-dom";

export default ({tagClick, post, ...props})=> {

  return (
    <Container {...props} className="fade1s">
      <Content>
        <PostLink to={"/post/"+post.id}>
          <Title>{post.title}</Title>
          <Info>{post.info}</Info>
        </PostLink>
        <Tags>{
          post.categories.map(({_id, tag, name}, index)=>
            <Tag
              key={index}
              onClick={()=> tagClick(tag)}
              to={tag}>
              {name}
            </Tag>
          )
        }</Tags>
        <Date>{post.date.join('.')}</Date>
      </Content>
    </Container>
  )

};

const Container = styled.section`
    display: flex;
    width: 33.33%;
    padding:  30px;
    border-top: 1px solid ${BORDER_COLOR};
    transition: 0.5s;
    
    @media (max-width: ${SCREEN_SMALL+"px"}) {
      width: 100%;
    }
    @media (min-width: ${SCREEN_SMALL+1+"px"}) and (max-width: ${SCREEN_BIG+"px"}) {
      width: 50%;
    }
  `;

const Title = styled.strong`
    flex-grow: 1;
    line-height: 1.4em;
    font-size: 20px;
    font-weight: 600;
    color: ${TEXT_COLOR};
    transition: 0.5s;
    margin-bottom: 15px;
  `;

const Info = styled.p`
    flex-grow: 1;
    line-height: 1.4em;
    font-size: 16px;
    font-weight: 400;
    color: ${TEXT_COLOR_LIGHT};
    transition: 0.5s;
    margin-bottom: 25px;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 65px;
  `;

const Content = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    transition: 0.5s;
    align-content: space-between;
  `;

const Tags = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: flex-start;
  `;

const Tag = styled(NavLinkRouter)`
    color: ${TEXT_COLOR_LIGHT};
    font-size: 16px;
    transition: 0.5s;
    border-bottom: 1px solid transparent;
    padding-bottom: 3px;
    text-decoration: none;
    margin-right: 10px;
    margin-bottom: 8px;
    
    &:hover {
    border-color: ${MAIN_COLOR};
    color: ${MAIN_COLOR};
    }
  `;

const Date = styled.div`
    font-size: 16px;
    color: ${TEXT_COLOR_LIGHT};
    transition: 0.5s;
  `;

const PostLink = styled(NavLinkRouter)`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    width: 100%;
    
    &:hover ${Title}, &:hover ${Info} {
      color: ${MAIN_COLOR}
    }
  `;
