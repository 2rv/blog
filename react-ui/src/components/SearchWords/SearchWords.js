import React, { Component} from 'react';
import PostList from "../PostList/PostList";
import styled, {keyframes} from "styled-components";
import {SHORT_FADE} from "../../constants";
import {connect} from "react-redux";
import {searchKeywords} from "../../actions";
import PropTypes from "prop-types";
import SearchBar from "../SearchBar/SearchBar";


class SearchWords extends Component {
  constructor(props){
    super(props);
    this.state = {
      keywords: this.props.match.params.keywords
    }
  }

  static propTypes = {
    searchKeywords: PropTypes.func.isRequired,
    keywords: PropTypes.object.isRequired,
  };

  selectFilter = (filter) => {
    this.props.history.push("/home/"+filter)
  };

  searchKeywords = () => {
    const {value} = this.props.keywords;
    this.props.searchKeywords({...this.props.keywords, value}, true);
  };

  changeKeywords = (e) => {
    this.props.searchKeywords({...this.props.keywords, value: e.target.value});
  };

  componentWillMount() {
    const {value, data} = this.props.keywords;

    if(data === null && value.length !== 0) {
      this.props.searchKeywords({...this.props.keywords, value}, true);
    }
  }

  render() {

    const {isLoading, value, data} = this.props.keywords;
    return (
      <Container>
        <SearchBar
          search={this.searchKeywords}
          change={this.changeKeywords}
          value={value}
        />
        <Main>
          {
            isLoading === false &&
            <PostList
              selectFilter={this.selectFilter}
              data={data}/>
          }
        </Main>
      </Container>
    );
  }

}

const mapStateToProps = store => {
  return {
    keywords: store.searchKeywords,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    searchKeywords: (words, isSearch) => dispatch(searchKeywords(words, isSearch)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchWords);


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
