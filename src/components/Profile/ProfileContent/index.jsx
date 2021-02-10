import React from 'react';
import './index.css';
import ProfileInfo from './ProfileInfo';
import ProfilePosts from './ProfilePosts';

const ProfileContent = () => (
  <div className="profile-content">
    <ProfileInfo />
    <ProfilePosts />
  </div>
);

export default ProfileContent;
