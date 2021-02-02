import NavBar from './index';
import { shallow } from 'enzyme';
import React from 'react';
import { testStore } from '../../config/utils';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<NavBar store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe('NavBar Component', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      auth: {
        firstName: 'ss',
        lastName: '',
        userId: null,
        userName: 'ss',
        id: 'id2225387',
        creationDate: '1/31/2021, 12:11:51 PM',
        isLoggedIn: true,
      },
    };
    wrapper = setUp(initialState);
  });

  it('Should render without errors', () => {
    const component = wrapper.find('#navBar');
    expect(component.exists()).toBeTruthy();
  });

  it('Should show article Button', () => {
    const component = wrapper.find('#articlButton');
    expect(component.exists()).toBeTruthy();
  });

  it('Hide links buttons for not loggin user', () => {
    const intData = {
      auth: { userName: 'sami', isLoggedIn: false },
    };
    wrapper = setUp(intData);
    const component = wrapper.find('#articlButton');
    expect(component.exists()).toBe(false);
  });
});
