import {combineReducers} from 'redux'

import todoReducers from './todoReducers'
import routes from './routes';

export default combineReducers({
  listData:  todoReducers,
  routes: routes
});
