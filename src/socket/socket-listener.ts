import react from 'react';
import { logInAction, logOutAction } from "../state/actions/JoinAction";
import { useDispatch } from "react-redux";
import { addMessageAction, usersAction, clearChatAction } from "../state/actions/chat";
import { setAlert } from "../state/actions/alert-action";


export  const socketListener = (name:any, socket:any, dispatch:any) =>{

  socket.emit('join', { name: name }, () => {});

    
    socket.on('successful-connection', (name: string,avatar:string) => {
        dispatch(logInAction({ name: { name },socket:socket,avatar }))
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
        dispatch(logOutAction())
        dispatch(clearChatAction())
        socket.close();
      dispatch(setAlert('Disconnected due to inactivity', 'danger'));
      });
      socket.on('login_error', (data: any) => {
        socket.close();
        const err = data.errorMessage
        dispatch(setAlert(err,'danger'))
  
      });
      // if server is not available
      socket.on('connect_error', () => {
        dispatch(logOutAction())
        dispatch(clearChatAction())
        socket.close();
        dispatch(setAlert('Server is not available','danger'));
      });

      // if server initiate the disconnection
      socket.on('disconnect', (reason:any) => {
        console.log(reason)
        dispatch(logOutAction())
        dispatch(clearChatAction())
        socket.close();
          dispatch(setAlert('Server is disconnected','danger'));
      });
      // if any error accurse
      // socket.on('error', (error:any) => {
      //   dispatch(logOutAction())
      //   dispatch(clearChatAction())
      //   socket.close();
      //   const err =  error
      //     dispatch(setAlert(err,'danger'));
      // });
    }
