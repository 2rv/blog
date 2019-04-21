import { combineReducers } from "redux";
import scrollingPage from "./scrollingPage";
import getPosts from "./getPosts";
import getCategories from "./getCategories";
import getArticle from "./getArticle";
import searchKeywords from "./searchKeywords";

const rootReducer = combineReducers({
  scrollingPage,
  getPosts,
  getCategories,
  getArticle,
  searchKeywords
});

export default rootReducer;
