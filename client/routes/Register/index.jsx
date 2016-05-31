import { requireNotAuth } from '../../Auth'
import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'register',
  onEnter: requireNotAuth(store),
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Register = require('./containers/RegisterContainer').default
      const reducer = require('./modules/reducer').default
      injectReducer(store, { key: 'register', reducer })
      cb(null, Register)
    }, 'register')
  }
})
