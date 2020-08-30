import React from 'react';
import './SideBar.css';
import { IoMdSquare } from 'react-icons/io';
import { UserCard } from '../user/UserCard';

interface Props {}
const SideBar = ({ users }: { users: Array<object> }) => {
  return (
    <div className='sidebar--Container'>
      <div className=''>
        <div className='sidebar--header'>
          <UserCard
            name={'Online'}
            avatar={
              'https://raw.githubusercontent.com/MoeTerani/Assets/6cde88260758749866d34020198983790496f15a/iCHAT/chat-icon.svg'
            }
          />
        </div>
        {users.map((user: any, i: number) => (
          <div key={i} className='activeUsers bottom--border'>
            <UserCard name={user.name} avatar={user.avatar} />
          </div>
        ))}
      </div>
      <div className='sidebar--footer'></div>
    </div>
  );
};

export default SideBar;
