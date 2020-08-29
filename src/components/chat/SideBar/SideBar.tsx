import React from 'react';
import './SideBar.css';
import { IoMdSquare } from 'react-icons/io';
import { UserCard } from '../user/UserCard';

interface Props {}
const SideBar = ({ users }: { users: Array<object> }) => {
  return (
    <div className='sidebar--Container'>
      <div className='sidebar--header'>
        <h1>Online Users</h1>
      </div>
      {users.map((user: any, i: number) => (
        <div key={i} className='activeUsers'>
          <UserCard name={user.name} avatar={user.avatar}/>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
