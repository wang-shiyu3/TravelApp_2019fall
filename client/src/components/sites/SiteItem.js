import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const SiteItem = ({ site: { _id, name, image, description } }) => {
  return (
    <div className='profile bg-light' style={{color:'black',borderRadius:'5px'}}>
      <div>
        <h2>{name}</h2>
        <p>
          {name} {description && <span> at {description}</span>}
        </p>
        <p>{image && <span> at {image}</span>}</p>
        <Link to={`/site/${_id}`} className='btn ' style={{backgroundColor:'skyblue'}}>
          View Profile
        </Link>
      </div>
    </div>
  )
}

SiteItem.propTypes = {
  site: PropTypes.object.isRequired
}

export default SiteItem
