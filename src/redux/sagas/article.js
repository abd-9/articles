import { call, put, select, takeLatest } from 'redux-saga/effects';
import { ArticleActionTypes } from '../actions';

// function* fetchUserProfileSaga() {
//   try {
//     const response = yield call(fetchUserProfileApi);
//     const userProfile = response.data.entity;

//     const { completeOnboarding } = yield select((state) => state.auth);

//     if (completeOnboarding) {
//       userProfile.completeOnboarding = true;
//     }

//     yield put(setProfile(userProfile));
//   } catch (e) {
//     console.error(`fetch User Profile Saga error: ${e}`);
//   }
// }
function* fetchArticleSaga(id) {
  try {
    console.log('sssssssss ', id);
    // const response = yield call(fetchUserProfileApi);
    // const userProfile = response.data.entity;

    // const { completeOnboarding } = yield select((state) => state.auth);

    // if (completeOnboarding) {
    //   userProfile.completeOnboarding = true;
    // }

    // yield put(setProfile(userProfile));
  } catch (e) {
    console.error(`fetch User Profile Saga error: ${e}`);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default [takeLatest(ArticleActionTypes.FETCH_ARTICLE, fetchArticleSaga)];
