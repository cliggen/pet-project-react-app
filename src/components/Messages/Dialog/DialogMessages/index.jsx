import React from 'react';
import './index.css';
import DialogMessage from './DialogMessage';

const DialogMessages = (props) => (
  <div className="dialog_mesagges">
    {props.messages.map(message => (
      <DialogMessage message={message} />
    ))}
  </div>
);

export default DialogMessages;
