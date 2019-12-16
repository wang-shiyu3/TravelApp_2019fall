import {
  //
  GET_COMMENTS,
  COMMENT_ERROR,
  CLEAR_COMMENT,
  ADD_COMMENT,
  DELETE_COMMENT
} from '../actions/types'

const initialState = {
  comment: null,
  comments: [],
  loading: true,
  error: {}
}

export default function(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    //
    case GET_COMMENTS:
      return {
        ...state,
        comments: payload,
        loading: false
      }
    case ADD_COMMENT:
      return {
        ...state,
        comments: [payload, ...state.comments],
        loading: false
      }
    case COMMENT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        comments: null
      }
    case CLEAR_COMMENT:
      return {
        ...state,
        comment: null,
        loading: false
      }
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(comment => comment._id !== payload),
        loading: false
      }
    default:
      return state
  }
}
