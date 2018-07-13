import { createStore, applyMiddleware } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from '../reducers'
import {rootSaga} from '../sagas'
import createSagaMiddleware from 'redux-saga'

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export function configureStore() {

    const sagaMiddleware = createSagaMiddleware()

    let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))

    let persistor = persistStore(store)

    sagaMiddleware.run(rootSaga)
    return {store}
}