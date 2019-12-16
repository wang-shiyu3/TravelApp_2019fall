// import React from 'react'
// import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

// const AdminSiteItem = ({ site: { _id, name, image, description } }) => {
//   return (
//     <div className='profile bg-light'>
//       <div>
//         <h2>{name}</h2>
//         <p>
//           {name} {description && <span> at {description}</span>}
//         </p>
//         <p>{image && <span> at {image}</span>}</p>
//       </div>
//     </div>
//   )
// }

// AdminSiteItem.propTypes = {
//   site: PropTypes.object.isRequired
// }

// export default AdminSiteItem

import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { deleteSite } from '../../actions/site'
import { connect } from 'react-redux'

const AdminSiteItem = ({
  site: { _id, name, image, description },
  auth,
  deleteSite
}) => {
  return (
    <div className='profile bg-light' style={{borderRadius:'5px',boxShadow:'10px'}}>
      <div>
        <h2>{name}</h2>
        <p>
          {name} {description && <span> at {description}</span>}
        </p>
        <p>{image && <span> at {image}</span>}</p>
      </div>
      <button
        onClick={() => deleteSite(_id)}
        type='button'
        className='btn btn-danger'
        style={{width:'50px'}}
      >
        <i className='fas fa-times' />
      </button>
    </div>
  )
}

AdminSiteItem.propTypes = {
  site: PropTypes.object.isRequired,
  deleteSite: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { deleteSite })(AdminSiteItem)
