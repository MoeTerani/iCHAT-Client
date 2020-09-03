import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import './Chat.css';
import StatusBar from './statusBar/StatusBar';
import InputBar from './InputBar/InputBar';
import Messages from './MessagesContainer/Messages';
import SideBar from './SideBar/SideBar';
import { disconnect } from '../../socket/socket-init';

interface Props { }

const Chat = (props: Props) => {
  const [message, setMessage] = useState<string>('');

  const name: any = useSelector((state: RootState) => state.JoinReducer.name);
  const socket: any = useSelector(
    (state: RootState) => state.JoinReducer.socket
  );
  const messages: any = useSelector(
    (state: RootState) => state.chatReducer.messages
  );
  const users: any = useSelector((state: RootState) => state.chatReducer.users);


  useEffect(() => {
    return () => {
      disconnect(socket);
    };
  }, [name.name, socket]);

  useEffect(() => { }, []);

  const sendMessage = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  return (
    <div className='outerContainer '>
      {/* {!connected ? <Redirect to='/' /> : null} */}

      <SideBar users={users} />
      <div className='container--chat left--border'>
        <StatusBar socket={socket} />
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
