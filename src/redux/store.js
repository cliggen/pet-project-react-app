import { combineReducers, createStore } from 'redux';
import profilePostsReducer from './reducers/profilePostsReducer';
import messagesReducer from './reducers/messagesReducer';

const reducers = combineReducers({
  profilePostsReducer,
  messagesReducer
});
const store = createStore(reducers);

export default store;
