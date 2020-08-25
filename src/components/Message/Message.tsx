import React from 'react';
//@ts-expect-error
import ReactEmoji from 'react-emoji';
import './Message.css';

interface Props {
  message: any;
  name: string;
}

const Message = ({ message, name }: Props) => {
  let isSentByCurrentUser = false;

  const trimedUserName = String(name).trim().toLowerCase();

  if (message.user === trimedUserName) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    <div className='messageContainer justifyEnd'>
      <p className='sentText pr-10'>{trimedUserName}</p>
      <div className='messageBox backgroundBlue'>
        <p className='messageText colorWhite'>
          {ReactEmoji.emojify(message.text)}
        </p>
      </div>
    </div>
  ) : (
    <div className='messageContainer justifyStart'>
      <div className='messageBox backgroundLight'>
        <p className='messageText colorDark'>
          {ReactEmoji.emojify(message.text)}
        </p>
      </div>
      <p className='sentText pl-10 '>{message.user}</p>
    </div>
  );
};

export default Message;
