import * as actions from './index';
import { ADD_MESSAGE } from '../../types';

describe('chat actions', () => {
  test('Add message  Action ', () => {
    const message = {
      user: 'admin',
      text: 'ddd welcome to the realtime chat ',
      avatar:
        'https://github.com/MoeTerani/Assets/blob/master/iCHAT/chat-bot.jpg?raw=true',
      time: '7:30 PM',
    };
    const expectedAction = {
      type: ADD_MESSAGE,
      payload: message,
    };
    expect(actions.addMessageAction(message)).toEqual(expectedAction);
  });

  test('Add user  Action ', () => {
    const expectedAction = {
      type: 'ADD_USERS',
      payload: {
        id: 'AFP_wU-DhE8GDP9UAAAM',
        name: 'ddd',
        avatar: 'https://avatars0.githubusercontent.com/u/400620?v=4',
      },
    };
    expect(
      actions.usersAction({
        id: 'AFP_wU-DhE8GDP9UAAAM',
        name: 'ddd',
        avatar: 'https://avatars0.githubusercontent.com/u/400620?v=4',
      })
    ).toEqual(expectedAction);
  });
});
