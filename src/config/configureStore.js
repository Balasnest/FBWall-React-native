import { createStore, applyMiddleware, compose } from 'redux'
import reducers from '../reducers'
import ReduxThunk from 'redux-thunk'
import {createLogger} from 'redux-logger'



export default configureStore = () => {
  const logger = createLogger();
  let store = createStore(reducers, {}, compose(applyMiddleware(ReduxThunk, logger)));
  return store;
}
