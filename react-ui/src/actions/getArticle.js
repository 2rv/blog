import {ARTICLE_FETCH_IN, ARTICLE_FETCH_GOOD, ARTICLE_FETCH_ERROR, API_GET_ARTICLE} from "../constants";
import {request} from "../services/requests";

export default function gatCategories(id) {

  return (dispatch => {
    dispatch( {type: ARTICLE_FETCH_IN, payload: {}} );
    request(API_GET_ARTICLE, "POST", id)
      .then(data => {
        dispatch( {type: ARTICLE_FETCH_GOOD, payload: data} );
      })
      .catch(error => dispatch({ type: ARTICLE_FETCH_ERROR, payload: error.message }) ) ;
  });
}
