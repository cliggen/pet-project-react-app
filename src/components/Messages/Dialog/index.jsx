import React from 'react';
import { withRouter } from 'react-router-dom';
import './index.css';
import { useSelector } from 'react-redux';
import DialogMessages from './DialogMessages';

const Dialog = (props) => {
  const currentDialog = useSelector(state => state.messagesReducer.users
    .find(item => item.id === Number(props.match.params.id)));
  console.log(currentDialog);
  return (
    <div className="dialog">
      <div>
        { `Conversation with ${currentDialog.name}`}
      </div>
      <DialogMessages messages={currentDialog.messages} />
    </div>
  );
};

export default withRouter(Dialog);
