import {all} from 'redux-saga/effects';
import {SagaLogin} from '../Screen/Login/Redux/saga';

export function* SagaWatcher() {
  yield all([SagaLogin()]);
}
