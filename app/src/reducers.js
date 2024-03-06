import { combineReducers } from 'redux'

import postReducers from './entities/post/postReducer'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  postReducers: postReducers,
})

export default rootReducer