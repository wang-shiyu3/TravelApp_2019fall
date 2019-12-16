// import {
//   //
//   GET_SITES,
//   CLEAR_SITE,
//   SITE_ERROR
//   //
// } from '../actions/types'

// const initialState = {
//   site: null,
//   sites: [],
//   loading: true,
//   error: {}
// }

// export default function(state = initialState, action) {
//   const { type, payload } = action

//   switch (type) {
//     case GET_SITES:
//       return {
//         ...state,
//         sites: payload,
//         loading: false
//       }
//     case CLEAR_SITE:
//       return {
//         ...state,
//         site: null,
//         loading: false
//       }
//     case SITE_ERROR:
//       return {
//         ...state,
//         error: payload,
//         loading: false,
//         site: null
//       }
//     //
//     default:
//       return state
//   }
// }

// import {
//   //
//   GET_SITES,
//   CLEAR_SITE,
//   SITE_ERROR,
//   ADD_SITE,
//   DELETE_SITE
//   //
// } from '../actions/types'

// const initialState = {
//   site: null,
//   sites: [],
//   loading: true,
//   error: {}
// }

// export default function(state = initialState, action) {
//   const { type, payload } = action

//   switch (type) {
//     case GET_SITES:
//       return {
//         ...state,
//         sites: payload,
//         loading: false
//       }
//     case CLEAR_SITE:
//       return {
//         ...state,
//         site: null,
//         loading: false
//       }
//     case SITE_ERROR:
//       return {
//         ...state,
//         error: payload,
//         loading: false,
//         site: null
//       }
//     case ADD_SITE:
//       return {
//         ...state,
//         sites: [payload, ...state.sites],
//         loading: false
//       }
//     case DELETE_SITE:
//       return {
//         ...state,
//         sites: state.sites.filter(site => site._id !== payload),
//         loading: false
//       }
//     //
//     default:
//       return state
//   }
// }

import {
  //
  GET_SITES,
  CLEAR_SITE,
  SITE_ERROR,
  ADD_SITE,
  DELETE_SITE
  //
} from '../actions/types'

const initialState = {
  site: null,
  sites: [],
  loading: true,
  error: {}
}

export default function(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_SITES:
      return {
        ...state,
        sites: payload,
        loading: false
      }
    case CLEAR_SITE:
      return {
        ...state,
        site: null,
        loading: false
      }
    case SITE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        site: null
      }
    case ADD_SITE:
      return {
        ...state,
        sites: [payload, ...state.sites],
        loading: false
      }
    case DELETE_SITE:
      return {
        ...state,
        sites: state.sites.filter(site => site._id !== payload),
        loading: false
      }
    //
    default:
      return state
  }
}
