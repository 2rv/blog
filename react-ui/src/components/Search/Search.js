import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {MAIN_COLOR, TEXT_COLOR} from "../../constants";
import styled from "styled-components";
import {connect} from "react-redux";
import {searchKeywords} from "../../actions";


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  static propTypes = {
    searchKeywords: PropTypes.func.isRequired,
    keywords: PropTypes.object.isRequired,
  };

  handleChange = (event) => {
    this.props.searchKeywords({...this.props.keywords, value: event.target.value});
  };

  handleClick = () => {
    const {value} = this.props.keywords;

    if(value.length !== 0 && this.state.active === true) {
      console.log("find");
      this.props.searchKeywords({...this.props.keywords, value}, true);
      this.props.history.push("/search");
    } else {
      this.setState({active: !this.state.active});
    }
  };

  componentWillMount() {
    this.props.searchKeywords();
  }

  render() {
    const {value} = this.props.keywords;

    return (
      <Container>
        <Input
          className={this.state.active && "active"}
          value={value}
          onChange={this.handleChange}
          placeholder="Searching by keywords"
          type="text"/>

        <Button onClick={this.handleClick}>
          <svg width="20px" height="20px" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
                  style={{transition: "0.5s"}}
                  fill={this.state.active === true ? MAIN_COLOR : TEXT_COLOR}/>
          </svg>
        </Button>
      </Container>
    )
  }
}

const Container = styled.div`
    display: flex;
    align-items: center;
  `;

const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;

const Input = styled.input`
    padding: 0;
    width: 0;
    height: 36px;
    border-radius: 100px;
    margin-right: 0px;
    border: 0 solid ${MAIN_COLOR};
    font-size: 14px;
    transition-property: width,padding;
    transition-duration: 0.7s;
    line-height: 100%;
    color: transparent;
    
    &.active {
      margin-right: 10px;
      width: 250px;
      color: ${MAIN_COLOR};
      padding: 0 15px;
      border: 1px solid ${MAIN_COLOR};
    }
  `;

const mapStateToProps = store => {
  return {
    keywords: store.searchKeywords,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    searchKeywords: (words, isSearchin) => dispatch(searchKeywords(words, isSearchin)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
