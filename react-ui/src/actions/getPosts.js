import {POSTS_FETCH_IN, POSTS_FETCH_GOOD, POSTS_FETCH_ERROR, API_GET_POSTS} from "../constants";
import {request} from "../services/requests";

export default function getPosts(data) {

  return (dispatch => {
    dispatch( {type: POSTS_FETCH_IN, payload: data} );
    request(API_GET_POSTS,"POST", data)
      .then(data => {
        dispatch( {type: POSTS_FETCH_GOOD, payload: data} );
      })
      .catch(error => dispatch({ type: POSTS_FETCH_ERROR, payload: {...data, error: error.message} }) ) ;
  });
}
