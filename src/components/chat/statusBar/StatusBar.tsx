import React from 'react';
import './StatusBar.css';
import { IoIosChatboxes, } from 'react-icons/io';
import { ImExit } from 'react-icons/im';
import io from 'socket.io-client';
import { logOutAction } from '../../../state/actions/JoinAction';
import { useDispatch } from 'react-redux';

interface Props { }

const StatusBar = (props: Props) => {
  const dispatch = useDispatch();
  const ENDPOINT = 'localhost:5000';

  let socket = io(ENDPOINT);
  return (
    <div className='statusBar'>
      <div className='leftInnerContainer'>
        <IoIosChatboxes />
      </div>
      <div className='rightInnerContainer' >
        <a href='/'  onClick={() => {
          socket.emit('disconnect')
          dispatch(logOutAction())
          }}>
            
          <ImExit className='closeIcon' />
        </a>
      </div>
    </div>
  );
};

export default StatusBar;
