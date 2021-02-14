import React from 'react';
import './index.css';
import { useSelector } from 'react-redux';
import MessagesParticipant from './MessagesParticipant';

const MessagesParticipants = () => {
  const messagesParticipants = useSelector(state => state.messagesReducer.users);
  return (
    <div className="messages_participants">
      {messagesParticipants.map(participant => (
        <MessagesParticipant
          participantName={participant.name}
          key={participant.id}
          participantId={participant.id}
        />
      ))}

    </div>
  );
};

export default MessagesParticipants;
