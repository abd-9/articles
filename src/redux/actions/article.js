export const ARTICLE_INITIAL_STATE = {
  article: {
    id: null,
    title: '',
    creationDate: '',
    content: '',
    image: '',
  },
  articlesList: [],
};

export const ArticleActionTypes = Object.freeze({
  CHANGE_ARTICLE_FIELD: 'CHANGE_ARTICLE_FIELD',
  UPDATE_ARTICLE: 'UPDATE_ARTICLE',
  ADD_ARTICLE: 'ADD_ARTICLE',
  DELETE_ARTICLE: 'DELETE_ARTICLE',
  SUCESS_FETCH_ARTICLES: 'SUCESS_FETCH_ARTICLES',
  START_FETCH_ARTICLE: 'START_FETCH_ARTICLE',
  FETCH_ARTICLE: 'FETCH_ARTICLE',
});

export const fetchArticlesStartActions = (userId) => ({
  type: ArticleActionTypes.START_FETCH_ARTICLE,
  payload: { userId },
});

export const fetchArticlesSuccessActions = (articlesList) => ({
  type: ArticleActionTypes.SUCESS_FETCH_ARTICLES,
  payload: { articlesList },
});

export const addArticlAction = (article) => ({
  type: ArticleActionTypes.ADD_ARTICLE,
  payload: {
    article,
  },
});

export const deleteArticlAction = (articleId) => ({
  type: ArticleActionTypes.DELETE_ARTICLE,
  payload: {
    articleId,
  },
});

export const updateArticlAction = (article) => ({
  type: ArticleActionTypes.UPDATE_ARTICLE,
  payload: {
    article,
  },
});

export const changeArticleField = (fieldName, fieldValue) => ({
  type: ArticleActionTypes.CHANGE_ARTICLE_FIELD,
  fieldName,
  fieldValue,
});

export const fetchArticleAction = (articleId) => ({
  type: ArticleActionTypes.FETCH_ARTICLE,
  articleId,
});
