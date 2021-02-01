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
          title: 'title 1',
          creationDate: 'today',
          content: 'contetn test',
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

  it('display props', () => {
    const labelTitle = wrapper.find({ name: 'title' });
    const lableCreationDate = wrapper.find({ name: 'creationDate' });
    expect(lableCreationDate.text()).toContain('today');
    expect(labelTitle.text()).toContain('title 1');
  });
});
