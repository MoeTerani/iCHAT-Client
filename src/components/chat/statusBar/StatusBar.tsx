import React from 'react';
import './StatusBar.css';
import { IoIosChatboxes, } from 'react-icons/io';
import { ImExit } from 'react-icons/im';
import io from 'socket.io-client';
import { logOutAction } from '../../../state/actions/JoinAction';
import { useDispatch } from 'react-redux';
import { disconnect } from '../../../socket/socket-init';
import { UserCard } from '../user/UserCard';

interface Props { }

const StatusBar = ({socket}:{socket:any}) => {
  const dispatch = useDispatch();
  

  return (
    <div className='statusBar'>
      {/* <div className='leftInnerContainer'> */}
        {/* <IoIosChatboxes /> */}
       <UserCard name={'John Doe'} avatar={'https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg'}/>
      <div className='rightInnerContainer' >
        <a href='/'  onClick={() => {
          socket.emit('disconnect')
          dispatch(logOutAction())
          disconnect(socket);
          }}>
            
          <ImExit className='closeIcon' />
        </a>
      </div>
    </div>
  );
};

export default StatusBar;