// import React, { Fragment, useEffect } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import Spinner from '../layout/Spinner'
// import AdminSiteItem from './AdminSitesItem'
// import { getSites } from '../../actions/site'

// const AdminSite = ({ getSites, site: { sites, loading } }) => {
//   useEffect(() => {
//     getSites()
//   }, [getSites])

//   return (
//     <Fragment>
//       {loading ? (
//         <Spinner />
//       ) : (
//         <Fragment>
//           <h1 className='large text-primary'>Sites</h1>
//           <p className='lead'>
//             <i className='fab fa-connectdevelop' /> Manage sites
//           </p>
//           <div className='profiles'>
//             {sites.length > 0 ? (
//               sites.map(site => <AdminSiteItem key={site._id} site={site} />)
//             ) : (
//               <h4>No sites found...</h4>
//             )}
//           </div>
//         </Fragment>
//       )}
//     </Fragment>
//   )
// }

// AdminSite.propTypes = {
//   getSites: PropTypes.func.isRequired,
//   site: PropTypes.object.isRequired
// }

// const mapStateToProps = state => ({
//   site: state.site
// })

// export default connect(mapStateToProps, { getSites })(AdminSite)

import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import AdminSiteItem from './AdminSitesItem'
import { getSites } from '../../actions/site'
import { Link, Redirect } from 'react-router-dom'
import SiteForm from './SiteForm'

const AdminSite = ({ getSites, site: { sites, loading } }) => {
  useEffect(() => {
    getSites()
  }, [getSites])

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className='large text'>Sites</h1>
          <p className='lead'>
            <i className='fab fa-connectdevelop' /> Check out beautiful sites
            all over the world
          </p>
          <SiteForm></SiteForm>
          <br />
          <br />
          <div className='profiles'>
            {sites.length > 0 ? (
              sites.map(site => <AdminSiteItem key={site._id} site={site} />)
            ) : (
              <Fragment>
                <h4>No sites found...</h4>
              </Fragment>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  )
}

AdminSite.propTypes = {
  getSites: PropTypes.func.isRequired,
  site: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  site: state.site
})

export default connect(mapStateToProps, { getSites })(AdminSite)
