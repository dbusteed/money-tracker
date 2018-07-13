import { take, put, select } from 'redux-saga/effects'
import { summarizeData } from '../services/summarizeData'


export function* summarySaga() {
    while(true) {
        try {
            
            yield take('MAKE_SUMMARY')
            const getLilData = (state) => state.addData

            let lilData = yield select(getLilData)

            yield data = summarizeData(lilData)
            
            yield put( {type: 'MAKE_SUMMARY_SUCCESS', data} )
            
        } catch(e) {
            console.log('ya done goofed: '+e)
        }
    }
}