import { fork } from 'redux-saga/effects'
import { summarySaga } from './summarySagas'

export function* rootSaga() {
    yield fork(summarySaga)
}