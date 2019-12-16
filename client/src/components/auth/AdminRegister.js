import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { setAlert } from '../../actions/alert'
import { registerAdmin } from '../../actions/auth'
import PropTypes from 'prop-types'

const AdminRegister = ({ setAlert, registerAdmin, isAuthenticatedAdmin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: ''
  })

  const { email, password, password2 } = formData

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault()
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger')
    } else {
      registerAdmin({ email, password })
    }
  }

  if (isAuthenticatedAdmin) {
    return <Redirect to='/admin/site' />
  }

  return (
    <Fragment>
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
      <section className="sonar-contact-area section-padding-100">

      <div className="contact-form text-center container" style={{width:'50%'}}>
      <h1 className='large text' style={{color:'darkblue'}}>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Create Your Account
      </p>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            className='form-control'
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            className='form-control'
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            className='form-control'
            onChange={e => onChange(e)}
          />
        </div>
        <input
          type='submit'
          className='btn sonar-btn'
          value='AdminRegister'
        />
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
      </div>
      </section>
    </Fragment>
  )
}

AdminRegister.propTypes = {
  setAlert: PropTypes.func.isRequired,
  registerAdmin: PropTypes.func.isRequired,
  isAuthenticatedAdmin: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticatedAdmin: state.auth.isAuthenticatedAdmin
})

export default connect(mapStateToProps, { setAlert, registerAdmin })(
  AdminRegister
)
