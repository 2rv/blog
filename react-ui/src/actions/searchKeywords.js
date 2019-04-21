import {SEARCH_KEYWORDS_WRITE, SEARCH_KEYWORDS_FETCH_IN, SEARCH_KEYWORDS_FETCH_GOOD, SEARCH_KEYWORDS_FETCH_ERROR, API_POST_SEARCH_KEYWORDS} from "../constants";
import {request} from "../services/requests";

export default function searchKeywords(data, toSearch = false) {

  return (dispatch => {
    if(toSearch !== true) dispatch( {type: SEARCH_KEYWORDS_WRITE, payload: data} );
    if(toSearch === true) {
      dispatch( {type: SEARCH_KEYWORDS_FETCH_IN, payload: data} );
      request(API_POST_SEARCH_KEYWORDS,"POST", data)
        .then(data => {
          dispatch( {type: SEARCH_KEYWORDS_FETCH_GOOD, payload: data} );
        })
        .catch(error => dispatch({ type: SEARCH_KEYWORDS_FETCH_ERROR, payload: {...data, error: error.message} }) ) ;
    }
  });
}
