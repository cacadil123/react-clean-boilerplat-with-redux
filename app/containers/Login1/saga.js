import { call, put, takeLatest } from 'redux-saga/effects';

import { loginUser, loginUserError, loginUserSuccess } from './actions';
import { post } from '../../utils/api';
import { LoginServerResponse, LoginServerRequest } from './models';

const login = request =>
  post('users/token', LoginServerRequest(request)).then(LoginServerResponse);

function* loginEvent(action) {
  try {
    const hasToken = yield call(login, {
      ...action.payload,
    });
    yield put(loginUserSuccess(hasToken));
  } catch (err) {
    if (
      err &&
      err.errorResponse &&
      err.errorResponse.Result === 'InvTfa_InvalidOrExpiredTfa'
    ) {
      yield put(loginUserSuccess(LoginServerResponse(err.errorResponse)));
    } else {
      const loginError = 'Invalid Username or password, please try again.';

      yield put(loginUserError(loginError));
    }
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* Login1Saga() {
  yield takeLatest(loginUser().type, loginEvent);
}
