import React, { Fragment, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addBlogtoSite } from '../../actions/blog'
import { setAlert } from '../../actions/alert'

const BlogForm = ({ addBlogtoSite, match }) => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    text: ''
  })

  //const [toDateDisabled, toggleDisabled] = useState(false)

  const { name, image, text } = formData

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    addBlogtoSite(formData, match.params.id)
  }

  return (
    <Fragment>
        <div>
    <div className="grids d-flex justify-content-between">
        <div className="grid1"></div>
        <div className="grid2"></div>
        <div className="grid3"></div>
        <div className="grid4"></div>
        <div className="grid5"></div>
        <div className="grid6"></div>
        <div className="grid7"></div>
        <div className="grid8"></div>
        <div className="grid9"></div>
    </div>
    <section className="sonar-contact-area section-padding-100" style={{boxshadow:'5px'}}>

      <div className="contact-form  " style={{width:'50%'}}>
      <h1 className='large text'>Add Your Blog</h1>
      <p className='lead'>
        <i className='fas fa-code-branch' /> Add your blog name
      </p>
      <small>* = required field</small>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Name'
            name='name'
            value={name}
            className='form-control'
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* image'
            name='image'
            value={image}
            className='form-control'
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* description'
            name='text'
            value={text}
            className='form-control'
            onChange={e => onChange(e)}
            required
          />
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/sites'>
          Go Back
        </Link>
      </form>
      </div>
      </section>
      </div>
    </Fragment>
  )
}

BlogForm.propTypes = {
  addBlogtoSite: PropTypes.func.isRequired
}

export default connect(null, { addBlogtoSite })(withRouter(BlogForm))
