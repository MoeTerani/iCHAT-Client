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
    <div className='messageContainer justifyEnd '>
      <p className='sentText pr-10'>{message.time}</p>

      <div className='messageBox backgroundBlue right'>
        <p className='messageText colorWhite'>
          {ReactEmoji.emojify(message.text)}
        </p>
      </div>
      <div className='message--avatar right--avatar'>
        <img src={message.avatar} alt='user avatar' />
      </div>
    </div>
  ) : (
    <div className='messageContainer justifyStart '>
      <div className='message--avatar left--avatar'>
        <img src={message.avatar} alt='user avatar' />
      </div>
      <div className='messageBox backgroundLight left'>
        <p className='messageText colorDark'>
          {ReactEmoji.emojify(message.text)}
        </p>
      </div>
      <p className='sentText pl-10 '>{message.time}</p>
    </div>
  );
};

export default Message;
