import {combineReducers} from 'redux'
import {counter} from './counterReducer'
import {addData} from './dataReducer'
import { summary } from './summaryReducer'
import { details } from './detailReducer'

const rootReducer = combineReducers({
    counter,
    addData,
    summary,
    details
})

export default rootReducer