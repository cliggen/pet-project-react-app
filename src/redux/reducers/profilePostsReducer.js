import { v4 as uuidv4 } from 'uuid';
import * as actionTypes from '../actionTypes';
import { getPostDate } from '../../utils/utils';

const initialState = {
  newPostMessage: '',
  postList: [
    { id: 1, date: 'February 14, 2021 at 21:20', author: 'Karina', content: 'Пирожок с капустой буш?' },
    { id: 2, date: 'February 13, 2021 at 21:20', author: 'Alex', content: 'Худею' }
  ]
};
const profilePostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_POST:
      return {
        ...state,
        newPostMessage: '',
        postList: [{
          id: uuidv4(),
          date: getPostDate(),
          author: action.author,
          content: action.content },
        ...state.postList
        ]
      };
    case actionTypes.POST_ON_CHANGE:
      return {
        ...state,
        newPostMessage: action.value
      };
    case actionTypes.DELETE_POST:
      return state;
    default:
      return state;
  }
};
export default profilePostsReducer;
