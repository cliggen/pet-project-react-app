import React from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { addPostAction, postOnChangeAction } from '../../../../../redux/actions';

const PostInput = () => {
  const dispatch = useDispatch();
  const newPostText = useSelector(state => state.profilePostsReducer.newPostMessage);
  return (
    <div className="post_input">
      <input type="text" value={newPostText} placeholder="Tell something interesting" onChange={(event) => dispatch(postOnChangeAction(event.target.value))} />
      <button type="button" onClick={() => dispatch(addPostAction(newPostText))}>Post it</button>
    </div>
  );
};

export default PostInput;
