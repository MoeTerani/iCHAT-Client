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
import { logOutAction, logInAction } from '../../state/actions/JoinAction';
import { disconnect, connectSocketListener } from '../../socket/socket-init';

interface Props { }


const Chat = (props: Props) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState<string>('');
  // const [messages, setMessages] = useState([]);
  // const [users, setUsers] = useState([]);
  // const [connected, setConnected] = useState(true);
  const [error, setError] = useState('');

  // const dispatch = useDispatch();
  // const ENDPOINT = 'localhost:5000';
  const name: any = useSelector((state: RootState) => state.JoinReducer.name);
  const socket: any = useSelector((state: RootState) => state.JoinReducer.socket);
  const messages: any = useSelector((state: RootState) => state.chatReducer.messages);
  const users: any = useSelector((state: RootState) => state.chatReducer.users);

  // let socket:any;

  useEffect(() => {
      

    


    return () => {
      disconnect(socket);

      console.log('unmounted');
    };
  }, [name.name, socket]);

  useEffect(() => {
    
  }, []);


  const sendMessage = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (message) {
    
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  return (
    <div className='outerContainer'>
      {/* {!connected ? <Redirect to='/' /> : null} */}

      <SideBar users={users} />
      <div className='container'>
        <StatusBar  socket={socket}/>
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
