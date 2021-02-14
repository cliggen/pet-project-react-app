import { v4 as uuidv4 } from 'uuid';
import * as actionTypes from '../actionTypes';
import { getPostDate } from '../../utils/utils';

const initialState = {
  newMessage: '',
  users: [
    {
      id: 1,
      name: 'Karina',
      messages: ['I want to buy a pug', 'Do u wanna cabbage cake?']
    },
    {
      id: 2,
      name: 'Denis',
      messages: ['Looks good to me!', 'Try to refactor to make the code more elegant:)']
    },
    {
      id: 3,
      name: 'Pasha',
      messages: ['How about motorcycle ride?', 'Hey, I just came home']
    },
    {
      id: 4,
      name: 'Ivan',
      messages: ['Loosing weight....', 'Tomorrow I will go to swimming pool']
    }
  ]
};
const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEND_MESSAGE:
      return {
        ...state,
        newPostMessage: '',
        postList: [{
          id: uuidv4(),
          date: getPostDate(),
          author: action.author,
          content: action.content
        },
        ...state.postList
        ]
      };
    case actionTypes.MESSAGE_ON_CHANGE:
      return {
        ...state,
        newPostMessage: action.value
      };
    case actionTypes.DELETE_MESSAGE:
      return state;
    default:
      return state;
  }
};
export default messagesReducer;
