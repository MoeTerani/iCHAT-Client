import React from 'react';
import './UserCard.css';

interface Props {}

const UserCard = ({ name, avatar }: { name: string; avatar: string }) => {
  return (
    <div className='userCard--title'>
      <h1>{name} </h1>
      <div className='avatar'>
        <img src={avatar} alt='current user avatar' />
      </div>
    </div>
  );
};

export default UserCard;
