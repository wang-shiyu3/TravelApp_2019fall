import { combineReducers } from 'redux'
import alert from './alert'
import auth from './auth'
// import profile from './profile'
// import post from './post'
import site from './site'
import blog from './blog'
import comment from './comment'

export default combineReducers({
  alert,
  auth,
  site,
  blog,
  comment
})
