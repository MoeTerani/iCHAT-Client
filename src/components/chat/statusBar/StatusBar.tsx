import React from 'react';
import './StatusBar.css';
import { ImExit } from 'react-icons/im';
import { logOutAction } from '../../../state/actions/JoinAction';
import { useDispatch, useSelector } from 'react-redux';
import { disconnect } from '../../../socket/socket-init';
import UserCard from '../user/UserCard';
import { RootState } from '../../../state/store';

interface Props {}

const StatusBar = ({ socket }: { socket: any }) => {
  const dispatch = useDispatch();
  const name: any = useSelector((state: RootState) => state.JoinReducer.name);
  const avatar: any = useSelector(
    (state: RootState) => state.JoinReducer.avatar
  );

  return (
    <div className='statusBar'>
      <UserCard name={name.name} avatar={avatar} />
      <div className='rightInnerContainer'>
        <a
          href='/'
          onClick={() => {
            socket.emit('disconnect');
            dispatch(logOutAction());
            disconnect(socket);
          }}
        >
          <ImExit className='closeIcon' />
        </a>
      </div>
    </div>
  );
};

export default StatusBar;
