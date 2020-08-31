import { shallow } from 'enzyme';
import React from 'react';
import Message from './Message';
import {
  getWrapperShallow,
  getWrapperComponent,
} from '../../../utilities/testHelperFn';

describe('Message components', () => {
  let props;
  let Component;

  beforeEach(() => {
    props = {
      message: {},
      name: '',
    };
    Component = getWrapperShallow(Message, { ...props });
  });
  test('it renders without errors', () => {
    expect(Component).toMatchSnapshot();
  });
  test('should render without errors', () => {
    expect(Component.length).toEqual(1);
  });

  //   test('should display messages', () => {
  //     const expected = {
  //       user: 'johnDoe',
  //       text: ':D',
  //       avatar: 'https://api.adorable.io/avatars/285/johnDoe@adorable.png',
  //       time: '8:42 PM',
  //     };

  //     Component.setProps({ message: expected });

  //     const message = getWrapperComponent(Component, 'Message').childAt(0);
  //     console.log({ message });
  //     expect(message.prop('user')).toEqual('johnDoe');
  //     expect(message.childAt(0).text()).toEqual('johnDoe');
  //     expect(message.childAt(2).text()).toEqual(':D');
  //     expect(message.childAt(1).text()).toEqual('10');
  //   });
});
