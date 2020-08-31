import { shallow } from 'enzyme';
import React from 'react';
import UserCard from './UserCard';
import {
  getWrapperShallow,
  getWrapperComponent,
} from '../../../utilities/testHelperFn';

describe('UserCard components', () => {
  let props;
  let Component;

  beforeEach(() => {
    props = {
      name: '',
      avatar: '',
    };
    Component = getWrapperShallow(UserCard, { ...props });
  });
  test('it renders without errors', () => {
    expect(Component).toMatchSnapshot();
  });
  test('should render without errors', () => {
    expect(Component.length).toEqual(1);
  });
});
