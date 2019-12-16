import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import { getCommentsByBlogId } from '../../actions/comment'
import CommentItem from './CommentItem'

const Comment = ({
  getCommentsByBlogId,
  comment: { comments, loading },
  match
}) => {
  useEffect(() => {
    getCommentsByBlogId(match.params.id)
  }, [getCommentsByBlogId, match.params.id])

  return (
    // <Fragment>
    //   {blogs === null ? (
    //     <Spinner />
    //   ) : (
    <Fragment>
      {/* <Link to={`/site/${comments.id}`} className='btn btn-light'>
        Back To Blogs
      </Link> */}
      {/* {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === blogs.user._id && (
              <Link to='/edit-blog' className='btn btn-dark'>
                Edit Blog
              </Link>
            )} */}
        <Link to={`/comment/add/${match.params.id}`} className='btn btn-light'>
        Add a comment
      </Link>
      <Fragment>
        <h1 className='large text'>Comments</h1>
        <p className='lead'>
          <i className='fab fa-connectdevelop' /> Check out all comments
          attached to the blog
        </p>
        <div className='profiles'>
          {comments.length > 0 ? (
            comments.map(comment => (
              <CommentItem key={comment._id} comment={comment} />
            ))
          ) : (
            <h4>No comments found...</h4>
          )}
        </div>
      </Fragment>
      {/* {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to='/edit-profile' className='btn btn-dark'>
                Edit Profile
              </Link>
            )} */}
      {/* <div className='profile-grid my-1'>
        
            <ProfileAbout profile={profile} />
            <div className='profile-exp bg-white p-2'>
              <h2 className='text-primary'>Experience</h2>
              {profile.experience.length > 0 ? (
                <Fragment>
                  {profile.experience.map(experience => (
                    <ProfileExperience
                      key={experience._id}
                      experience={experience}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>No experience credentials</h4>
              )}
            </div>

            <div className='profile-edu bg-white p-2'>
              <h2 className='text-primary'>Education</h2>
              {profile.education.length > 0 ? (
                <Fragment>
                  {profile.education.map(education => (
                    <ProfileEducation
                      key={education._id}
                      education={education}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>No education credentials</h4>
              )}
            </div>

            {profile.githubusername && (
              <ProfileGithub username={profile.githubusername} />
            )}
          </div> */}
    </Fragment>
    //   )}
    // </Fragment>
  )
}

Comment.propTypes = {
  getCommentsByBlogId: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  comment: state.comment
})

export default connect(mapStateToProps, { getCommentsByBlogId })(Comment)
