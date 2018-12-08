import {createStore,applyMiddleware,compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
import mySaga from './sagas'
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
  const enhancer = composeEnhancers(
    applyMiddleware(applyMiddleware(sagaMiddleware)),
    // other store enhancers if any
  );
const store = createStore(reducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mySaga)
export default store