import { take, put, select, all } from 'redux-saga/effects'
import { makeDetails } from '../services/makeDetails'


export function* detailSaga() {
    while(true) {
        try {
            
            const ret = yield take('GET_DETAILS')
            const getLilData = (state) => state.addData

            let lilData = yield select(getLilData)

            yield data = makeDetails(lilData, ret.month)
            
            yield put( {type: 'GET_DETAILS_SUCCESS', data} )

        } catch(e) {
            console.log('ya done goofed: '+e)
        }
    }
}