import { ARTICLE_INITIAL_STATE, ArticleActionTypes } from '../actions';

const articleReducer = (state = ARTICLE_INITIAL_STATE, action) => {
  switch (action.type) {
    case ArticleActionTypes.FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.payload,
      };

    case ArticleActionTypes.SUCESS_FETCH_ARTICLES:
      const { payload } = action;
      return {
        ...state,
        articlesList: payload.articlesList || [],
      };
    default:
      return state;
  }
};

export default articleReducer;
