import * as actions from '../actions';
import articleReducer from './article';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    const article = { id: '1', title: 'title1', userName: 'userNAme1 ', content: 'content1' };

    expect(
      articleReducer(
        { articlesList: [article], article: {} },
        actions.fetchArticleSuccessAction(article)
      )
    ).toEqual({
      article: { id: '1', title: 'title1', userName: 'userNAme1 ', content: 'content1' },
      articlesList: [article],
    });
  });
});
