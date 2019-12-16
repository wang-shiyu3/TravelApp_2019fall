import {
  //
  GET_BLOGS,
  BLOG_ERROR,
  CLEAR_BLOG,
  ADD_BLOG,
  DELETE_BLOG
} from '../actions/types'

const initialState = {
  blog: null,
  blogs: [],
  loading: true,
  error: {}
}

export default function(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    //
    case GET_BLOGS:
      return {
        ...state,
        blogs: payload,
        loading: false
      }
    case ADD_BLOG:
      return {
        ...state,
        blogs: [payload, ...state.blogs],
        loading: false
      }
    case BLOG_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        blogs: null
      }
    case CLEAR_BLOG:
      return {
        ...state,
        blog: null,
        loading: false
      }
    case DELETE_BLOG:
      return {
        ...state,
        sites: state.blogs.filter(blog => blog._id !== payload),
        loading: false
      }
    default:
      return state
  }
}
