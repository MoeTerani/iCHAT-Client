import React from 'react';
import './Messages.css';
import Message from '../Message/Message';
import './Messages.css';
//@ts-expect-error
import ScrollToBottom from 'react-scroll-to-bottom';

interface Props {
  messages: any;
  name: string;
}

const Messages = ({ messages, name }: Props) => {
  return (
    <ScrollToBottom className='messages'>
      {messages.map((message: object, i: number) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

export default Messages;
