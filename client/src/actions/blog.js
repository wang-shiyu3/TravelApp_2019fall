import axios from 'axios'
import { setAlert } from './alert'

import {
  //
  GET_BLOGS,
  BLOG_ERROR,
  CLEAR_BLOG,
  ADD_BLOG,
  DELETE_BLOG
} from './types'

// Get blogs by site ID
export const getBlogBySiteId = siteId => async dispatch => {
  try {
    //dispatch({ type: CLEAR_BLOG })
    const res = await axios.get(`/api/blog/site/${siteId}`)

    dispatch({
      type: GET_BLOGS,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: BLOG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// Add a blog to a site
export const addBlogtoSite = (formData, siteId) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const body = JSON.stringify(formData)
    const res = await axios.post(
      `/api/blog/addorUpdate/${siteId}`,
      body,
      config
    )
    dispatch({
      type: ADD_BLOG,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: BLOG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

//Delete blog
export const deleteBlog = blogId => async dispatch => {
  try {
    const res = await axios.delete(`/api/blog/${blogId}`)
    dispatch({
      type: DELETE_BLOG,
      payload: blogId
    })
    dispatch({
      type: GET_BLOGS,
      payload: res.data
    })
    dispatch(setAlert('Blog Removed', 'success'))
  } catch (err) {
    dispatch({
      type: BLOG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}
