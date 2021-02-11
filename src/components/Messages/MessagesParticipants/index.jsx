import React from 'react';
import './index.css';
import MessagesParticipant from './MessagesParticipant';

const MessagesParticipants = () => {
  const messagesParticipants = [
    { name: 'Alex', id: 0 },
    { name: 'Karina', id: 1 },
    { name: 'Denis', id: 2 }
  ];
  return (
    <div className="messages_participants">
      {messagesParticipants.map(participant => (
        <MessagesParticipant participantName={participant.name} participantId={participant.id} />))}

    </div>
  );
};

export default MessagesParticipants;
