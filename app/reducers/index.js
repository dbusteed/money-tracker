import {combineReducers} from 'redux'
import {counter} from './counterReducer'
import {addData} from './dataReducer'
import { summary } from './summaryReducer'

const rootReducer = combineReducers({
    counter,
    addData,
    summary
})

export default rootReducer