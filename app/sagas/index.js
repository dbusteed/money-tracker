import { fork } from 'redux-saga/effects'
import { summarySaga } from './summarySagas'
import { detailSaga } from './detailSagas'

export function* rootSaga() {
    yield fork(summarySaga)
    yield fork(detailSaga)
}