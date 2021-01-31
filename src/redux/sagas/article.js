import { toast } from 'react-toastify';
import { put, takeLatest } from 'redux-saga/effects';
import {
  ArticleActionTypes,
  ARTICLE_INITIAL_STATE,
  fetchArticlesSuccessAction,
  fetchArticleSuccessAction,
} from '../actions';

function* fetchArticlesSaga() {
  try {
    const articlesList = yield JSON.parse(localStorage.getItem('articles')) || [];
    yield put(fetchArticlesSuccessAction(articlesList));
  } catch (e) {
    console.error(`fetch  Articles Saga error: ${e}`);
  }
}

function* fetchArticleSaga({ articleId }) {
  try {
    if (articleId) {
      const articlesList = yield JSON.parse(localStorage.getItem('articles')) || [];
      const result = articlesList.find((a) => a.id === articleId);

      if (result?.id) {
        yield put(fetchArticleSuccessAction(result));
      }
    } else yield put(fetchArticleSuccessAction(ARTICLE_INITIAL_STATE.article));
  } catch (e) {
    console.error(`fetch article Saga error: ${e}`);
  }
}

function* addArticleSaga(action) {
  try {
    const articlesList = yield JSON.parse(localStorage.getItem('articles')) || [];
    yield articlesList.push({
      ...action.payload.article,
      id: `id${Math.floor(Math.random() * Math.floor(9999999))}`,
      creationDate: new Date().toLocaleString(),
    });
    yield localStorage.setItem('articles', JSON.stringify(articlesList));
    yield put(fetchArticlesSuccessAction(articlesList));
    toast.success('Articale Added.');
  } catch (e) {
    console.error(`add article Saga error: ${e}`);
  }
}

function* updateArticleSaga(action) {
  try {
    const { article } = action.payload;
    const articlesList = yield JSON.parse(localStorage.getItem('articles')) || [];
    const newArticles = articlesList.map((a) => {
      if (a.id === article.id) return article;
      return a;
    });
    yield localStorage.setItem('articles', JSON.stringify(newArticles));
    yield put(fetchArticlesSuccessAction(newArticles));
    toast.success('Articale Updated.');
  } catch (e) {
    console.error(`fetch article Saga error: ${e}`);
  }
}

function* deleteArticleSaga({ articleId }) {
  try {
    const articlesList = yield JSON.parse(localStorage.getItem('articles')) || [];
    const newArticlesList = articlesList.filter((a) => a.id !== articleId);
    yield localStorage.setItem('articles', JSON.stringify(newArticlesList));
    yield put(fetchArticlesSuccessAction(newArticlesList));
    yield put(yield put(fetchArticleSuccessAction(ARTICLE_INITIAL_STATE.article)));
    toast.success('Articale Deleted.');
  } catch (e) {
    console.error(`delelted article Saga error: ${e}`);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  takeLatest(ArticleActionTypes.FETCH_ARTICLE, fetchArticleSaga),
  takeLatest(ArticleActionTypes.START_FETCH_ARTICLES, fetchArticlesSaga),
  takeLatest(ArticleActionTypes.ADD_ARTICLE, addArticleSaga),
  takeLatest(ArticleActionTypes.UPDATE_ARTICLE, updateArticleSaga),
  takeLatest(ArticleActionTypes.DELETE_ARTICLE, deleteArticleSaga),
];
