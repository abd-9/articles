import { ARTICLE_INITIAL_STATE, ArticleActionTypes } from '../actions';

const articleReducer = (state = ARTICLE_INITIAL_STATE, action) => {
  switch (action.type) {
    case ArticleActionTypes.CHANGE_ARTICLE_FIELD:
      return {
        ...state,
        article: { ...state.article, [action.fieldName]: action.fieldValue },
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
