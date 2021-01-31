import Article from './index';
import { shallow } from 'enzyme';
import React from 'react';
import { testStore } from '../../../config/Utils';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<Article store={store} />)
    .childAt(0)
    .dive();

  return wrapper;
};

describe('Article Component', () => {
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
      article: {
        article: {
          id: '1111',
          title: 'test1',
          creationDate: 'sss',
          content: 'asdasda',
          image: '',
          userName: 'ss',
        },
      },
    };
    wrapper = setUp(initialState);
  });

  it('Should render without errors', () => {
    const component = wrapper.find('#articleCard');
    expect(component).toBeTruthy();
  });

  it('Hide actions buttons for not owner user', () => {
    const intData = {
      auth: { userName: 'sami' },
      article: {
        article: {
          id: '1111',
          title: 'test1',
          creationDate: 'sss',
          content: 'content 1',
          image: '',
          userName: 'ahmad',
        },
      },
    };
    wrapper = setUp(intData);

    const component = wrapper.find('#articleButtons');
    expect(component).toHaveLength(0);
  });
});
