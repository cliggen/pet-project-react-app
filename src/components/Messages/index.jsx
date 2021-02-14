import React from 'react';
import './index.css';
import { Route } from 'react-router-dom';
import MessagesParticipants from './MessagesParticipants';
import Dialog from './Dialog';

const Messages = () => (
  <div className="messages">
    <MessagesParticipants />
    <Route path="/messages/:id" exact component={Dialog} />
  </div>
);

export default Messages;
