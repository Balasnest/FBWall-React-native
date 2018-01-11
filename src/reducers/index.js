import { combineReducers } from 'redux';
import NewsFeedReducer from './NewsFeedReducer';


export default combineReducers({
	newsFeed: NewsFeedReducer
});