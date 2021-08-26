import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {takeLatest, put} from 'redux-saga/effects';
import {loginAction, POST_LOGIN} from './action';
import {loginActionSuccess, loginActionError} from './action';

function* loginActionApi(action) {
  yield put(loginActionSuccess);
}

export function* SagaLogin() {
  yield takeLatest(POST_LOGIN, loginActionApi);
}
