import { combineReducers } from 'redux';
import posts from './postReducer';
import comments from './commentReducer';
import { routerReducer } from 'react-router-redux'; // to sync react router with redux store



const rootReducer = combineReducers({
  posts,
  comments,
  routing: routerReducer
});

export default rootReducer;
