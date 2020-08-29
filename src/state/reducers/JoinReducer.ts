import { logInState, ActionTypes, LOG_IN, LOG_OUT } from '../types';

const initialState: logInState = {
  name: '',
  socket: null,
  users: [],
  isAuthenticated: false,
};
export default (state = initialState, action: ActionTypes): logInState => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, name: action.payload.name, users: action.payload.users,socket: action.payload.socket, isAuthenticated: true };

    case LOG_OUT:
        return { ...initialState };
    default:
      return state;
  }
};
