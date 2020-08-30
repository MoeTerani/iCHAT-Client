import React from 'react';
import { Link } from 'react-router-dom';
import { FaSun } from 'react-icons/fa';
import { BsFillChatDotsFill } from 'react-icons/bs';
import './NavBar.css';

interface Props {}

const NavBar = (props: Props) => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          iCHAT <BsFillChatDotsFill className='icon--color' />
        </Link>
      </h1>
      <div>
        <label className='switch'>
          <FaSun className='icon--color' />
          <div>
            <input
              onChange={() => {
                document.body.classList.toggle('light-theme');
              }}
              type='checkbox'
              className='dot'
            />
            <span className='slider round'></span>
          </div>
        </label>
      </div>
    </nav>
  );
};

export default NavBar;
