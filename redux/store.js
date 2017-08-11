import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';
import logger from 'redux-logger'

const middleware = [ logger ];
let finalCreateStore = compose(
    applyMiddleware(...middleware)
  )(createStore)

export default function configStore(initState = { todos: [], user: {}}) {
  return finalCreateStore(rootReducer, initState)
}


// export default function configStore(initState = { todos: [], user: {}}) {
//   return createStore(rootReducer, initState)
// }

// export default function configStore(initState = { todos: []}) {
//   return createStore(reducer, initState)
// }
