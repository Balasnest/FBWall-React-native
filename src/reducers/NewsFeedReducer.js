import * as types from '../actions/types';
import Feeds from '../API/FeedsMock';


const INITIAL_STATE = {
	loading: false,
	feeds: Feeds.Feeds.data
};

export default (state=INITIAL_STATE, action) => {
	console.log(action.type);
	
	switch(action.type) {

		case types.ADD_NEW_POST:
      		return { ...state, feeds:{...state.feeds, ...action.payload} };

		default:
			return state;
	}
}