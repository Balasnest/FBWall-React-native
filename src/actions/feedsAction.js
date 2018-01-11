import * as types from './types';

export const addNewPost = (item) => {
	return {
		type: types.ADD_NEW_POST,
		payload: item
	};
}