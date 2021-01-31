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
  START_FETCH_ARTICLES: 'START_FETCH_ARTICLES',
  FETCH_ARTICLE: 'FETCH_ARTICLE',
  FETCH_ARTICLE_SUCCESS: 'FETCH_ARTICLE_SUCCESS',
});

export const fetchArticlesStartAction = () => ({
  type: ArticleActionTypes.START_FETCH_ARTICLES,
});

export const fetchArticlesSuccessAction = (articlesList) => ({
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
  articleId,
});

export const updateArticleAction = (article) => ({
  type: ArticleActionTypes.UPDATE_ARTICLE,
  payload: {
    article,
  },
});

export const fetchArticleSuccessAction = (article) => ({
  type: ArticleActionTypes.FETCH_ARTICLE_SUCCESS,
  payload: article,
});

export const fetchArticleAction = (articleId) => ({
  type: ArticleActionTypes.FETCH_ARTICLE,
  articleId,
});
