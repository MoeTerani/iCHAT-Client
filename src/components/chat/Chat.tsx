import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import io from 'socket.io-client';
import './Chat.css';
import StatusBar from '../statusBar/StatusBar';
import InputBar from '../InputBar/InputBar';
import Messages from '../MessagesContainer/Messages';
import SideBar from '../SideBar/SideBar';
import { Redirect } from 'react-router-dom';
import { setAlert } from '../../store/actions/alert-action';

interface Props {}

let socket: any;
let TimeOut: any;

const Chat = (props: Props) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [inactiveUser, setInactiveUser] = useState(false);
  const [error, setError] = useState('');
  const [timer, setTimer] = useState(false);

  // const dispatch = useDispatch();
  const ENDPOINT = 'https://chat-app-moe.herokuapp.com/';
  const name: any = useSelector((state: RootState) => state.JoinReducer.name);
  const room: any = useSelector((state: RootState) => state.JoinReducer.room);

  useEffect(() => {
    socket = io(ENDPOINT, {
      reconnection: false,
    });

    socket.emit('join', { name: name.name, room: room.room }, (err: string) => {
      setError(err);
      console.log(error);
    });

    return () => {
      socket.emit('disconnect');
      socket.off();
      console.log('unmounted');
    };
  }, [ENDPOINT]);

  useEffect(() => {
    socket.on('message', (msg: object) => {
      // @ts-expect-error
      setMessages((messages: object) => [...messages, msg]);
    });
    socket.on('roomData', (data: any) => {
      setUsers(data.users);
    });
  }, []);

  function startTimeOut(inactivityTime: number) {
    TimeOut = setTimeout(() => {
      socket.emit('inActiveUser');
      setInactiveUser(true);
      dispatch(setAlert('Disconnected due to inactivity', 'danger'));
    }, inactivityTime);
  }

  const sendMessage = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (message) {
      if (TimeOut) {
        clearTimeout(TimeOut);
        TimeOut = null;
      }
      startTimeOut(10000);
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  return (
    <div className='outerContainer'>
      {inactiveUser ? <Redirect to='/' /> : null}

      <SideBar users={users} />
      <div className='container'>
        <StatusBar />
        <Messages messages={messages} name={name.name} />
        <InputBar
          room={room.room}
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
