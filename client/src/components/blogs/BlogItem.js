import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteBlog } from '../../actions/blog'

const BLogItem = ({ auth, blog: { _id, name, image, text }, deleteBlog }) => {
  return (
    <div className='profile bg-light' style={{color:'black',borderRadius:'5px'}}>
      <div>
        <h2>{name}</h2>
        <p>
          {name} {text && <span> at {text}</span>}
        </p>
        <p>{image && <span> at {image}</span>}</p>
        <Fragment>
          <Link to={`/comment/${_id}`} className='btn' style={{backgroundColor:'skyblue'}}>
            View Blog
          </Link>
        </Fragment>
        <br />
        <Fragment>
          {' '}
          <Link to={`/add/${_id}`} className='btn btn-light'>
            Edit Blog
          </Link>
        </Fragment>

        <button
          onClick={() => deleteBlog(_id)}
          type='button'
          className='btn btn-light'
        >
          Delete Blog
        </button>
      </div>
    </div>
  )
}

BLogItem.propTypes = {
  blog: PropTypes.object.isRequired,
  deleteBlog: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { deleteBlog })(BLogItem)
