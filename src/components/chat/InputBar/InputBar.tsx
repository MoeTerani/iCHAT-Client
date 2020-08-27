import React from 'react';
import './InputBar.css';
import { MdSend } from 'react-icons/md';

interface Props {
  message: string;
  setMessage: (message: string) => void;
  sendMessage: (e: any) => void;
}
const InputBar = ({ message, setMessage, sendMessage }: Props) => {
  return (
    <form className='form--bar'>
      <input
        className='input--bar'
        type='text'
        placeholder={`Message ...`}
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={(event) =>
          event.key === 'Enter' ? sendMessage(event) : null
        }
      />
      <button className='sendButton' onClick={(e) => sendMessage(e)}>
        <MdSend className='sendIcon' />
      </button>
    </form>
  );
};

export default InputBar;
