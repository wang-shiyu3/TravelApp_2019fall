import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import { getBlogBySiteId } from '../../actions/blog'
import BLogItem from './BlogItem'

const Blog = ({
  getBlogBySiteId,
  blog: { _id, blogs, loading },
  auth,
  match
}) => {
  useEffect(() => {
    getBlogBySiteId(match.params.id)
  }, [getBlogBySiteId, match.params.id])

  return (
    // <Fragment>
    //   {blogs === null ? (
    //     <Spinner />
    //   ) : (
    <Fragment>
      <Link to='/sites' className='btn btn-light'>
        Back To Sites
      </Link>
      <Link to={`/blog/add/${match.params.id}`} className='btn btn-light'>
        Add a blog
      </Link>

      <Fragment>
      <div className="container">
 
 <div id="carousel-example" 
 className="carousel slide carousel-fade" 
 data-ride="carousel">

 <ol className="carousel-indicators">
     <li data-target="#carousel-example" data-slide-to="0" className="active"></li>
     <li data-target="#carousel-example" data-slide-to="1"></li>
     <li data-target="#carousel-example" data-slide-to="2"></li>
 </ol>

 <div className="carousel-inner" role="listbox">
     
     <div className="carousel-item active" style={{height:'600px'}}>
         <img  src={require("../../img/bg-img/about2.jpg")} alt="First slide"/>
     </div>
     
     
     <div className="carousel-item" style={{height:'600px'}}>
         <img  src={require("../../img/bg-img/2.jpg")} alt="Second slide"/>
     </div>
     
     
     <div className="carousel-item" style={{height:'600px'}} >
         <img  src={require("../../img/bg-img/3.jpeg")} alt="Third slide"/>
     </div>
     
 </div>
 
 
 <a className="carousel-control-prev" href="#carousel-example" role="button" data-slide="prev">
     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
     <span className="sr-only">Previous</span>
 </a>
 <a className="carousel-control-next" href="#carousel-example" role="button" data-slide="next">
     <span className="carousel-control-next-icon" aria-hidden="true"></span>
     <span className="sr-only">Next</span>

 </a>
 
 </div>
 
</div>
        <h1 className='large text'>Blogs</h1>
        <p className='lead'>
          <i className='fab fa-connectdevelop' /> Browse and different blogs by
          people
        </p>
        <div className='profiles'>
          {blogs.length > 0 ? (
            blogs.map(blog => <BLogItem key={blog._id} blog={blog} />)
          ) : (
            <h4>No blogs found...</h4>
          )}
        </div>
      </Fragment>
      {/* {auth.isAuthenticated &&
        auth.loading === false &&
        auth.user._id === blog.user._id && (
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

Blog.propTypes = {
  getBlogBySiteId: PropTypes.func.isRequired,
  blog: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  blog: state.blog
})

export default connect(mapStateToProps, { getBlogBySiteId })(Blog)
