import {
  SEARCH_KEYWORDS_WRITE, SEARCH_KEYWORDS_FETCH_IN,
  SEARCH_KEYWORDS_FETCH_GOOD, SEARCH_KEYWORDS_FETCH_ERROR
} from "../constants";

const initialState = {
  isLoading: null,
  value: "",
  data: null
};

export default (state = initialState, action) => {

  switch (action.type) {
    case SEARCH_KEYWORDS_WRITE:
      return {...state, isLoading: null, ...action.payload};

    case SEARCH_KEYWORDS_FETCH_IN:
      return {...state, isLoading: true, ...action.payload};

    case SEARCH_KEYWORDS_FETCH_GOOD:
      return {...state, isLoading: false, ...action.payload};

    case SEARCH_KEYWORDS_FETCH_ERROR:
      return {...state, isLoading: false, ...action.payload};

    default:
      return state;
  }

};
