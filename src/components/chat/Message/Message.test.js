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
});
