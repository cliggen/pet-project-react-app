import React from 'react';
import './index.css';
import { useSelector } from 'react-redux';
import Post from './Post';

const PostsList = () => {
  const postsList = useSelector(state => state.profilePostsReducer.postList);

  return (
    <div className="posts_list">
      {postsList.map(post => (
        <Post
          key={post.id}
          date={post.date}
          author={post.author}
          content={post.content}
        />
      ))}
    </div>
  );
};

export default PostsList;
