import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';
import { useDispatch } from 'react-redux';
import { logInAction } from '../../state/actions/JoinAction';
import Alert from './Alert';

interface Props { }

const Join = (props: Props) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const dispatch = useDispatch();
  // useEffect(() => {
  //   effect;
  //   return () => {
  //     cleanup;
  //   };
  // }, [input]);

  return (
    <div className='wrapper--join'>
      <Alert />
      <div className='container--join'>
        <h1>Welcome</h1>

        <form className='form--join'>
          <input
            className='input--join'
            type='text'
            placeholder='UserName'
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          {/* <input
            className='input--join'
            type='text'
            placeholder='Room'
            onChange={(e) => setRoom(e.target.value)}
            value={room}
          /> */}
          <Link to='/chat'>
            <button
              type='submit'
              onClick={() => {
                dispatch(logInAction({ name: { name } }));
              }}
              id='login-button'
            >
              Enter
            </button>
          </Link>
        </form>
      </div>

      <ul className='bg-bubbles'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Join;
