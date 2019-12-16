// import {
//   REGISTER_SUCCESS,
//   REGISTER_FAIL,
//   USER_LOADED,
//   AUTH_ERROR,
//   LOGIN_SUCCESS,
//   LOGIN_FAIL,
//   LOGOUT,
//   ACCOUNT_DELETED
// } from '../actions/types';

// const initialState = {
//   token: localStorage.getItem('token'),
//   isAuthenticated: null,
//   loading: true,
//   user: null
// };

// export default function(state = initialState, action) {
//   const { type, payload } = action;

//   switch (type) {
//     case USER_LOADED:
//       return {
//         ...state,
//         isAuthenticated: true,
//         loading: false,
//         user: payload
//       };
//     case REGISTER_SUCCESS:
//     case LOGIN_SUCCESS:
//       localStorage.setItem('token', payload.token);
//       return {
//         ...state,
//         ...payload,
//         isAuthenticated: true,
//         loading: false
//       };
//     case REGISTER_FAIL:
//     case AUTH_ERROR:
//     case LOGIN_FAIL:
//     case LOGOUT:
//     case ACCOUNT_DELETED:
//       localStorage.removeItem('token');
//       return {
//         ...state,
//         token: null,
//         isAuthenticated: false,
//         loading: false
//       };
//     default:
//       return state;
//   }
// }

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  ACCOUNT_DELETED,
  REGISTER_SUCCESS_ADMIN,
  LOGIN_SUCCESS_ADMIN,
  ADMIN_LOADED,
  ADMIN_LOGOUT
} from '../actions/types'

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  // new
  isAuthenticatedAdmin: null,
  admin: null,
  loading: true,
  user: null
}

export default function(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    //user
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      }
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token)
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      }
    //admin
    case REGISTER_SUCCESS_ADMIN:
    case LOGIN_SUCCESS_ADMIN:
      localStorage.setItem('token', payload.token)
      return {
        ...state,
        ...payload,
        isAuthenticatedAdmin: true,
        loading: false
      }
    case ADMIN_LOADED:
      return {
        ...state,
        isAuthenticatedAdmin: true,
        loading: false,
        admin: payload
      }
    case REGISTER_FAIL:

    case LOGIN_FAIL:
    case ADMIN_LOGOUT:
    case LOGOUT:
    case ACCOUNT_DELETED:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isAuthenticatedAdmin: false,
        loading: false
      }
    case AUTH_ERROR:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      }
    default:
      return state
  }
}
