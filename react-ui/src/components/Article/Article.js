import React, { Component} from 'react';
import styled, {keyframes} from "styled-components";
import {
  BORDER_COLOR,
  FAST_FADE,
  LIGHT_COLOR,
  MAIN_COLOR,
  SCREEN_ARTICLE,
  TEXT_COLOR,
  TEXT_COLOR_LIGHT
} from "../../constants";
import ReactMarkdown from "react-markdown";
import "../../assets/prism.css";
import PropTypes from "prop-types";
import {getArticle} from "../../actions";
import {connect} from "react-redux";

class Article extends Component {

  constructor(props){
    super(props);
    this.state = {
      id: this.props.match.params.id
    }
  }

  static propTypes = {
    article: PropTypes.object.isRequired,
    getArticle: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.getArticle({id: this.state.id});
  }


  render() {

    const {isLoading, data} = this.props.article;

    return (

      <Container>
        {
          isLoading === false &&
          <ReactMarkdown
            className={"content"}
            source={data.content}/>
        }
      </Container>

    );
  }

}

const mapStateToProps = store => {
  return {
    article: store.getArticle,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getArticle: (id) => dispatch(getArticle(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);

const fade = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
  `;

const Container = styled.article`
    width: 100%;
    max-width: ${SCREEN_ARTICLE + "px"};
    height: 100%;
    animation: ${fade} ${FAST_FADE + "s"} ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    flex-grow: 1;
    
    .content {
    
      color: ${TEXT_COLOR};
      line-height: 1.6em;
      font-size: 17px;
      font-family: 'Roboto', serif;
      
      h1,h2,h3,h4,h5,h6 {
      font-family: "Poppins", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
      }
    
      h1 {
        font-size: 2.2em;
        margin-bottom: 25px;
        font-weight: 700;
        font-family: 'Roboto', serif;
      }
      
      h2 {
        font-size: 1.2em;
        color: ${TEXT_COLOR_LIGHT};
        font-weight: 400;
        margin-bottom: 60px;
        line-height: 1.7em;
      }
      
      h3 {
        border-top: 1px solid ${BORDER_COLOR};
        padding-top: 40px;
        margin-bottom: 10px;
        font-size: 1.6em;
        font-weight: 600;
      }
      
      h4 {
        font-size: 1.2em;
      }
      
      p {
        padding: 0;
        margin: 15px 0;
        font-weight: 400;
      }
      
      strong {
        font-weight: 600;
      }
      
      em {
        color: ${TEXT_COLOR_LIGHT};
        font-style: normal;
      }
      
      blockquote {
        margin: 0;
        padding: 15px 15px 15px 50px;
        background-color: ${LIGHT_COLOR};
        border-left: 3px solid ${MAIN_COLOR};
        
        p {
        margin: 0;
        padding: 0;
        }
        
        p:not(:last-of-type) {
        margin-bottom: 15px;
        }
      }
      
      pre {
        margin: 15px 0;
        padding: 15px;
      }
      
      ul, ol {
      margin: 15px 0;
      padding-left: 50px;
      
        li {
        margin-bottom: 5px;
        }
      
        li:not(:last-of-type) {
          
          p {
            margin: 0
          }
          
          p:not(:last-of-type) {
            margin-bottom: 15px;
          }
        }
        
      }
      
      a {
      color: ${MAIN_COLOR};
      text-decoration: none;
      padding-bottom: 1px;
      border-bottom: 1px solid transparent;
      transition: 0.5s;
      
        &:hover {
        border-color: ${MAIN_COLOR};
        }
      }
      
      img {
      max-width: 100%;
      display: block;
      margin: 0 auto;
      }
     
    
    }
  `;


