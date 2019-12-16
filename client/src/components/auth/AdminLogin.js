import React, { Fragment, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { loginAdmin } from '../../actions/auth'

const AdminLogin = ({ loginAdmin, isAuthenticatedAdmin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault()
    loginAdmin(email, password)
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
      <h1 className='large text' style={{color:'darkblue'}}>Sign In</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Sign Into Your Account
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
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            className='form-control'
            onChange={e => onChange(e)}
            minLength='6'
          />
        </div>
        <input type='submit' className='btn sonar-btn' value='Login' />
      </form>
      <p className='my-1'>
        Don't have an account? <Link to='/registerAdmin'>Sign Up</Link>
      </p>
      </div>
      </section>
    </Fragment>
  )
}

AdminLogin.propTypes = {
  loginAdmin: PropTypes.func.isRequired,
  isAuthenticatedAdmin: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticatedAdmin: state.auth.isAuthenticatedAdmin
})

export default connect(mapStateToProps, { loginAdmin })(AdminLogin)
