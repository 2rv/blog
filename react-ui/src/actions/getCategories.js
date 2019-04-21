import {CATEGORIES_FETCH_IN, CATEGORIES_FETCH_GOOD, CATEGORIES_FETCH_ERROR, API_GET_CATEGORIES} from "../constants";
import {request} from "../services/requests";

export default function gatCategories() {

  return (dispatch => {
    dispatch( {type: CATEGORIES_FETCH_IN, payload: {}} );
    request(API_GET_CATEGORIES, "GET")
      .then(data => {
        dispatch( {type: CATEGORIES_FETCH_GOOD, payload: data} );
      })
      .catch(error => dispatch({ type: CATEGORIES_FETCH_ERROR, payload: error.message }) ) ;
  });
}
