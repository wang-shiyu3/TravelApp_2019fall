import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout, logoutAdmin } from '../../actions/auth'

const Navbar = ({
  auth: { isAuthenticatedAdmin, isAuthenticated, loading },
  logout,
  logoutAdmin
}) => {
  const authLinks = (
    <ul>
      <li>
        <Link to='/sites'>Sites</Link>
      </li>

      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  )

  const adminLinks = (
    <ul>
      <li>
        <Link to='/register' onClick={logoutAdmin}>
          <a>
            <i className='fas fa-sign-out-alt' />{' '}
            <span className='hide-sm'>Logout</span>
          </a>
        </Link>
      </li>
    </ul>
  )

  const guestLinks = (
    <ul>
      <li>
        <Link to='/sites'>Sites</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
      <li>
        <Link to='/adminLogin'>AdminLogin</Link>
      </li>
      <li>
        <Link to='/adminRegister'>Admin Resgister</Link>
      </li>
    </ul>
  )

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-globe-americas'></i> | Traveling Compass
        </Link>
      </h1>
      {!loading && (
        <Fragment>
          {isAuthenticated
            ? authLinks
            : isAuthenticatedAdmin
            ? adminLinks
            : guestLinks}
        </Fragment>
      )}
    </nav>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  logoutAdmin: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout, logoutAdmin })(Navbar)
