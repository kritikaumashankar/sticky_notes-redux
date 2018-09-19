import { createStore, compose} from 'redux'
import rootReducer from './reducers'

const enhancers = compose(
  window.devToolsExtention ? window.devToolsExtention() : f => f
)

const store = createStore(rootReducer, {}, enhancers)

if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store