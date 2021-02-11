import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

const MessagesParticipants = (props) => (
  <div className="participant">
    <NavLink to={`/messages/${props.participantId}`}>
      {props.participantName}
    </NavLink>
  </div>

);

export default MessagesParticipants;
