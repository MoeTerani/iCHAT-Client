import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Join.css';
import { useDispatch, useSelector } from 'react-redux';
import Alert from './Alert';
import { connectSocketListener } from '../../socket/socket-init';
import { RootState } from '../../state/store';

interface Props {}

const Join = (props: Props) => {
  const [name, setName] = useState('');
  const isAuthenticated = useSelector(
    (state: RootState) => state.JoinReducer.isAuthenticated
  );

  const dispatch = useDispatch();

  if (isAuthenticated) {
    return <Redirect to='/chat' />;
  }
  return (
    <div className='wrapper--join '>
      <Alert />
      <div className='container--join '>
        <h1>Welcome</h1>

        <form className='form--join'>
          <input
            className='input--join'
            type='text'
            placeholder='Github username / Nickname'
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <h6>Enter your Github username to get your github avatar </h6>

          <Link to='/chat'>
            <button
              type='submit'
              onClick={() => {
                connectSocketListener(name, dispatch);
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
