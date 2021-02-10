import React from 'react';
import ProfileAvatar from './ProfileAvatar';
import './index.css';
import ProfileContent from './ProfileContent';
import ProfileFriends from './ProfileFriends';

const Profile = () => (
  <div className="profile">
    <ProfileAvatar />
    <ProfileFriends />
    <ProfileContent />
  </div>
);
export default Profile;
