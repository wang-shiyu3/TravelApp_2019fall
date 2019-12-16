import axios from 'axios'
import { setAlert } from './alert'

import {
  //
  GET_COMMENTS,
  COMMENT_ERROR,
  CLEAR_COMMENT,
  //
  ADD_COMMENT,
  //
  DELETE_COMMENT
} from './types'

// Get comments by blog ID
export const getCommentsByBlogId = blogId => async dispatch => {
  try {
    dispatch({ type: CLEAR_COMMENT })

    const res = await axios.get(`/api/comment/blog/${blogId}`)
    dispatch({
      type: GET_COMMENTS,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: COMMENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// Add a comment to a blog
export const addCommenttoBlog = (formData, blogId) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const body = JSON.stringify(formData)
    const res = await axios.post(
      `/api/comment/addorUpdate/${blogId}`,
      body,
      config
    )

    dispatch({
      type: ADD_COMMENT,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: COMMENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

//Delete blog
export const deleteComment = commentId => async dispatch => {
  try {
    const res = await axios.delete(`/api/blog/${commentId}`)
    dispatch({
      type: DELETE_COMMENT,
      payload: commentId
    })
    dispatch({
      type: GET_COMMENTS,
      payload: res.data
    })
    dispatch(setAlert('Comment Removed', 'success'))
  } catch (err) {
    dispatch({
      type: COMMENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}
