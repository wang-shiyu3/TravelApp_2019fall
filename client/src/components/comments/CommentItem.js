import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteComment } from '../../actions/comment'

const CommentItem = ({ comment: { _id, name, text }, deleteComment }) => {
  return (
    <div className='profile bg-light' style={{color:'black',borderRadius:'5px'}}>
      <div>
        <h2>{name}</h2>
        <p>
          {name} {text && <span> at {text}</span>}
        </p>
        <Fragment>
          {' '}
          <Link to='/' className='btn btn-light'>
            Edit Comment
          </Link>
        </Fragment>
        {/* <Fragment>
          {' '}
          <Link to='/' className='btn btn-light'>
            Delete Comment
          </Link>
        </Fragment> */}
        <button
          onClick={() => deleteComment(_id)}
          type='button'
          className='btn btn-light'
        >
          Delete Comment
        </button>
      </div>
    </div>
  )
}

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { deleteComment })(CommentItem)
