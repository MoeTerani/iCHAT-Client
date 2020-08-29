import {
  ADD_MESSAGE,
  ADD_USERS,
  ActionTypes, 
  chatState,
  CLEAR_CHAT,
} from '../../types';

const initialState:chatState = {
  messages: [],
  users: [],
  
};

export default (state = initialState, action: ActionTypes):chatState => {
  switch (action.type) {
    case ADD_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };
    case ADD_USERS:
      return { ...state, users: action.payload };
    case CLEAR_CHAT:
      return initialState;
    default:
      return state;
  }
};
