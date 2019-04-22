import { combineReducers } from 'redux';
import tasksReducer from './tasks';
import errorReducer from './errors'
import messageReducer from './messages'

export default combineReducers({
    tasksReducer,
    errorReducer,
    messageReducer,

})