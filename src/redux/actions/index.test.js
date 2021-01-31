import { ArticleActionTypes } from './article';
import * as actions from './index';

describe('actions', () => {
  it('add Article Action', () => {
    const article = { id: 'test', title: 'title1' };
    const expectedAction = {
      type: ArticleActionTypes.ADD_ARTICLE,
      payload: { article },
    };
    expect(actions.addArticlAction(article)).toEqual(expectedAction);
  });
  it('edit Article Action', () => {
    const article = { id: 'test', title: 'title1' };
    const expectedAction = {
      type: ArticleActionTypes.UPDATE_ARTICLE,
      payload: { article },
    };

    expect(actions.updateArticleAction(article)).toEqual(expectedAction);
  });

  it('delete Article Action', () => {
    const articleId = 'id_111';
    const expectedAction = {
      type: ArticleActionTypes.DELETE_ARTICLE,
      articleId,
    };
    expect(actions.deleteArticlAction(articleId)).toEqual(expectedAction);
  });
});
