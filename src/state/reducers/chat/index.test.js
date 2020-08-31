import reducers from './index';

describe('chat reducer', () => {
  test('should return the intestinal state', () => {
    expect(reducers(undefined, {})).toEqual({
      messages: [],
      users: [],
    });
  });

  test('Add message reducer', () => {
    let state;
    state = reducers(
      {
        messages: [],
        users: [],
      },
      {
        type: 'ADD_MESSAGE',
        payload: {
          user: 'admin',
          text: 'ddd welcome to the realtime chat ',
          avatar:
            'https://github.com/MoeTerani/Assets/blob/master/iCHAT/chat-bot.jpg?raw=true',
          time: '7:30 PM',
        },
      }
    );
    expect(state).toEqual({
      messages: [
        {
          user: 'admin',
          text: 'ddd welcome to the realtime chat ',
          avatar:
            'https://github.com/MoeTerani/Assets/blob/master/iCHAT/chat-bot.jpg?raw=true',
          time: '7:30 PM',
        },
      ],
      users: [],
    });
  });

  test('Add a user Reducer', () => {
    let state;
    state = reducers(
      {
        messages: [
          {
            user: 'admin',
            text: 'ddd welcome to the realtime chat ',
            avatar:
              'https://github.com/MoeTerani/Assets/blob/master/iCHAT/chat-bot.jpg?raw=true',
            time: '7:30 PM',
          },
        ],
        users: [],
      },
      {
        type: 'ADD_USERS',
        payload: [
          {
            id: 'AFP_wU-DhE8GDP9UAAAM',
            name: 'ddd',
            avatar: 'https://avatars0.githubusercontent.com/u/400620?v=4',
          },
        ],
      }
    );
    expect(state).toEqual({
      messages: [
        {
          user: 'admin',
          text: 'ddd welcome to the realtime chat ',
          avatar:
            'https://github.com/MoeTerani/Assets/blob/master/iCHAT/chat-bot.jpg?raw=true',
          time: '7:30 PM',
        },
      ],
      users: [
        {
          id: 'AFP_wU-DhE8GDP9UAAAM',
          name: 'ddd',
          avatar: 'https://avatars0.githubusercontent.com/u/400620?v=4',
        },
      ],
    });
  });
});
