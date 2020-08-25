import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './StatusBar.css';
import { AiOutlineClose } from 'react-icons/ai';
import { IoIosChatboxes } from 'react-icons/io';
import { RootState } from '../../store/store';
import io from 'socket.io-client';

interface Props {}

const StatusBar = (props: Props) => {
  const ENDPOINT = 'localhost:5000';

  const room: any = useSelector((state: RootState) => state.JoinReducer.room);
  let socket = io(ENDPOINT);
  return (
    <div className='statusBar'>
      <div className='leftInnerContainer'>
        <IoIosChatboxes />
        <h3>{room.room}</h3>
      </div>
      <div className='rightInnerContainer'>
        <a href='/' onClick={() => socket.emit('disconnect')}>
          <AiOutlineClose className='closeIcon' />
        </a>
      </div>
    </div>
  );
};

export default StatusBar;
