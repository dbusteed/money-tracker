import {combineReducers} from 'redux'
import {counter} from './counterReducer'
import {data} from './dataReducer'

const rootReducer = combineReducers({
    counter,
    data
})

export default rootReducer