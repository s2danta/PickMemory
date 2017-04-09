import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'
import initialState from './reducers/initialState'

import { createLogger } from 'redux-logger'

const logger = createLogger({});

const middlewares = { thunkMiddleware, logger };
const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middlewares)
);

export default store;
