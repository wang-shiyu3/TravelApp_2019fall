// import axios from 'axios'
// import { setAlert } from './alert'

// import {
//   //
//   GET_SITES,
//   CLEAR_SITE,
//   SITE_ERROR
//   //
// } from './types'

// // Get all sites
// export const getSites = () => async dispatch => {
//   dispatch({ type: CLEAR_SITE })

//   try {
//     const res = await axios.get('/api/site')

//     dispatch({
//       type: GET_SITES,
//       payload: res.data
//     })
//   } catch (err) {
//     dispatch({
//       type: SITE_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     })
//   }
// }

// // Get admin sites

import axios from 'axios'
import { setAlert } from './alert'

import {
  //
  GET_SITES,
  CLEAR_SITE,
  SITE_ERROR,
  ADD_SITE,
  DELETE_SITE

  //
} from './types'

// Get all sites
export const getSites = () => async dispatch => {
  dispatch({ type: CLEAR_SITE })

  try {
    const res = await axios.get('/api/site')

    dispatch({
      type: GET_SITES,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: SITE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

//Add&Update  site
export const addSite = ({ name, image, description }) => async dispatch => {
  // dispatch({ type: CLEAR_SITE })
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    console.log(name, image, description)
    const body = JSON.stringify({ name, image, description })
    const res = await axios.post('/api/site/addorUpdate', body, config)

    dispatch({
      type: ADD_SITE,
      payload: res.data
    })
    dispatch(setAlert('Site added!', 'success'))
  } catch (err) {
    dispatch({
      type: SITE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

//Delete site
export const deleteSite = siteId => async dispatch => {
  try {
    const res = await axios.delete(`/api/site/${siteId}`)
    dispatch({
      type: DELETE_SITE,
      payload: siteId
    })
    dispatch(setAlert('Site Removed', 'success'))
  } catch (err) {
    dispatch({
      type: SITE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}
