import React from 'react';
import './index.css';
import MessagesParticipants from './MessagesParticipants';
import Dialog from './Dialog';

const Messages = () => (
  <div className="messages">
    <MessagesParticipants />
    <Dialog />
  </div>
);

export default Messages;
