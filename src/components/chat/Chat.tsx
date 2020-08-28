import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import io from 'socket.io-client';
import './Chat.css';
import StatusBar from './statusBar/StatusBar';
import InputBar from './InputBar/InputBar';
import Messages from './MessagesContainer/Messages';
import SideBar from './SideBar/SideBar';
import { Redirect } from 'react-router-dom';
import { setAlert } from '../../state/actions/alert-action';

interface Props { }

let socket: any;

const Chat = (props: Props) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [connected, setConnected] = useState(true);
  const [error, setError] = useState('');

  // const dispatch = useDispatch();
  const ENDPOINT = 'localhost:5000';
  const name: any = useSelector((state: RootState) => state.JoinReducer.name);


  useEffect(() => {
    socket = io(ENDPOINT, {
      reconnection: false,
    });

    socket.emit('join', { name: name.name }, (err: string) => {
      setError(err);
      dispatch(setAlert(error, 'danger'));
    });

    return () => {
      socket.emit('disconnect');
      socket.off();
      console.log('unmounted');
    };
  }, [ENDPOINT, dispatch, error, name.name]);

  useEffect(() => {
    socket.on('message', (msg: object) => {
      // @ts-expect-error
      setMessages((messages: object) => [...messages, msg]);
    });
    socket.on('activeUsers', (data: any) => {
      setUsers(data.users);
    });
    socket.on('timeOut', (data: any) => {
      socket.emit('inActiveUser');
      setConnected(false);
      socket.close();
    dispatch(setAlert('Disconnected due to inactivity', 'danger'));
    });
    socket.on('login_error', (data: any) => {
      const err = data.errorMessage
      setConnected(false)
      setError(data.errorMessage);
      dispatch(setAlert(err,'danger'))
      socket.close();

    });
  }, [dispatch, error]);


  const sendMessage = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (message) {
    
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  return (
    <div className='outerContainer'>
      {!connected ? <Redirect to='/' /> : null}

      <SideBar users={users} />
      <div className='container'>
        <StatusBar />
        <Messages messages={messages} name={name.name} />
        <InputBar
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
