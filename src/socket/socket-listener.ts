import react from 'react';
import { logInAction, logOutAction } from "../state/actions/JoinAction";
import { useDispatch } from "react-redux";
import { addMessageAction, usersAction, clearChatAction } from "../state/actions/chat";
import { setAlert } from "../state/actions/alert-action";


export  const socketListener = (name:any, socket:any, dispatch:any) =>{
    socket.emit('join', { name: name }, () => {});
    
    socket.on('successful-connection', (name: string) => {
        dispatch(logInAction({ name: { name },socket:socket }))
      });
      socket.on('message', (msg: object) => {
        dispatch(addMessageAction(msg)) 
    });
    socket.on('activeUsers', (data: any) => {
        dispatch(usersAction(data.users)) 
      });
      socket.on('timeOut', (data: any) => {
        socket.emit('inActiveUser');
        // setConnected(false);
        socket.close();
        dispatch(logOutAction())
        dispatch(clearChatAction())
      dispatch(setAlert('Disconnected due to inactivity', 'danger'));
      });
      socket.on('login_error', (data: any) => {
        const err = data.errorMessage
        dispatch(setAlert(err,'danger'))
        socket.close();
  
      });
    }
