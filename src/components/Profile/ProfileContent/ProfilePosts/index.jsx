import React from 'react';
import './index.css';
import PostInput from './PostInput';
import PostsList from './PostsList';

const ProfilePosts = () => (
  <div className="profile_posts">
    <PostInput />
    <PostsList />
  </div>
);

export default ProfilePosts;
