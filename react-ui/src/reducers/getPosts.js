import {POSTS_FETCH_IN, POSTS_FETCH_GOOD, POSTS_FETCH_ERROR} from "../constants";

const initialState = {
  isLoading: null
};

export default (state = initialState, action) => {

  switch (action.type) {
    case POSTS_FETCH_IN:
      return {...state, isLoading: true};

    case POSTS_FETCH_GOOD:
      return {...state, isLoading: false, ...action.payload};

    case POSTS_FETCH_ERROR:
      return {...state, isLoading: false, error: action.payload};

    default:
      return state;
  }

};
