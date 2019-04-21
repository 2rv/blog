import React, { Component} from 'react';
import Heading from "../Heading/Heading";
import PostList from "../PostList/PostList";
import styled, {keyframes} from "styled-components";
import {SHORT_FADE} from "../../constants";
import {connect} from "react-redux";
import {getPosts} from "../../actions";
import PropTypes from "prop-types";


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      filter: null
    }
  }

  static propTypes = {
    posts: PropTypes.object.isRequired,
    getPosts: PropTypes.func.isRequired
  };

  selectFilter = (filter) => {
    if(filter !== this.state.filter) {
      this.setState({filter: filter});
      this.props.getPosts({filter});
    }
  };

  componentWillMount() {
    this.selectFilter(this.props.match.params.filter)
  }

  render() {

    const {isLoading, filter, data} = this.props.posts;
    return (
      <Container>
        <Heading
          selectFilter={this.selectFilter}
          filter={filter}
        />
        <Main>
          {
            isLoading === false &&
            <PostList
              selectFilter={this.selectFilter}
              filter={filter}
              data={data}/>
          }
        </Main>
      </Container>
    );
  }

}

const mapStateToProps = store => {
  return {
    posts: store.getPosts,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: (filter) => dispatch(getPosts(filter)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);


const fade = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
  `;

const Container = styled.div`
    width: 100%;
    animation: ${fade} ${SHORT_FADE + "s"} ease-in-out;
  `;

const Main = styled.div`
    margin-top: 100px;
    width: 100%;
  `;
