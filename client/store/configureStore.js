import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import detailContent from 'reducers/detail-content'
import mainContent from 'reducers/main-content'

const logger = createLogger()
const rootReducer = combineReducers({mainContent, detailContent})

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  logger
)(createStore)

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState)
}
