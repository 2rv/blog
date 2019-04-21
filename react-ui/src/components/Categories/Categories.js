import React, {Component} from 'react';
import {BORDER_COLOR, MAIN_COLOR, SCREEN_MEDIUM, TEXT_COLOR, TEXT_COLOR_LIGHT} from "../../constants";
import {NavLink as NavLinkRouter} from "react-router-dom";
import styled from "styled-components";
import {getCategories} from "../../actions";
import {connect} from "react-redux";
import PropTypes from "prop-types";

class Categories extends Component {

  static propTypes = {
    categories: PropTypes.object.isRequired,
    getCategories: PropTypes.func.isRequired
  };

  tags = [
    {text: 'React', tag: 'react'},
    {text: 'React Native', tag: 'react_native'},
    {text: 'Angular', tag: 'angular'},
    {text: 'Dart', tag: 'dart'},
    {text: 'Express', tag: 'express'},
    {text: 'Node', tag: 'node'},
    {text: 'All', tag: 'all'},

  ];

  handleTagClick = (tag)=> {
    if(this.props.filter !== tag) {
      this.props.selectFilter(tag)
    }
  };

  componentWillMount() {
    this.props.getCategories();
  }

  render() {

    const {isLoading, data} = this.props.categories;
    const filter = this.props.filter;
    return (

      <Container>
        {
          isLoading === false &&
          data.map(({tag, name}, id)=>
            <Category
              key={id}
              to={tag}
              onClick={()=> this.handleTagClick(tag)}
              className={tag === filter ? "active" : ""}
            >
              {name}
            </Category>)
        }

        <Category
          to={"all"}
          onClick={()=> this.handleTagClick("all")}
          className={"all" === filter ? "active" : ""}
        >
          {"All"}
        </Category>
      </Container>

    )
  }
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
    
    @media (max-width: ${SCREEN_MEDIUM+"px"}) {
      justify-content: flex-start;
      padding: 20px 0;
    }
  `;

const Category = styled(NavLinkRouter)`
    color: ${TEXT_COLOR};
    font-size: 16px;
    text-decoration: none;
    transition: 0.5s;
    padding-bottom: 3px;
    border-bottom: 1px solid transparent;
    white-space: nowrap;
    
    &:hover {
      color: ${TEXT_COLOR_LIGHT};
      border-bottom: 1px solid ${BORDER_COLOR};
    }
    
    &:not(:last-of-type) {
      margin-right: 25px;
    }
    &.active {
      color: ${MAIN_COLOR}
      border-bottom: 1px solid ${MAIN_COLOR};
    }
  `;

const mapStateToProps = store => {
  return {
    categories: store.getCategories,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(getCategories()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
