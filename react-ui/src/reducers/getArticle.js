import {ARTICLE_FETCH_IN, ARTICLE_FETCH_GOOD, ARTICLE_FETCH_ERROR} from "../constants";

const initialState = {
  isLoading: null
};

export default (state = initialState, action) => {

  switch (action.type) {
    case ARTICLE_FETCH_IN:
      return {...state, isLoading: true};

    case ARTICLE_FETCH_GOOD:
      return {...state, isLoading: false, ...action.payload};

    case ARTICLE_FETCH_ERROR:
      return {...state, isLoading: false, error: action.payload};

    default:
      return state;
  }

};
