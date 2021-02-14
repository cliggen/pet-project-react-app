import * as actionTypes from './actionTypes';

export const addPostAction = content => ({ type: actionTypes.ADD_POST, content });
export const deletePostAction = id => ({ type: actionTypes.DELETE_POST, id });
export const postOnChangeAction = value => ({ type: actionTypes.POST_ON_CHANGE, value });
export const sendMessage = messagePayload => ({ type: actionTypes.SEND_MESSAGE, messagePayload });
