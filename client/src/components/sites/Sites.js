import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import SiteItem from './SiteItem'
import { getSites } from '../../actions/site'


const Sites = ({ getSites, site: { sites, loading } }) => {
  useEffect(() => {
    getSites()
  }, [getSites])

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="container-fluid" style={{margin:'0'}}>
 
 <div id="carousel-example" 
 className=" container-fluid carousel slide carousel-fade" 
 data-ride="carousel">

 <ol className="carousel-indicators container-fluid">
     <li data-target="#carousel-example" data-slide-to="0" className="active"></li>
     <li data-target="#carousel-example" data-slide-to="1"></li>
     <li data-target="#carousel-example" data-slide-to="2"></li>
 </ol>

 <div className="carousel-inner" role="listbox">
     
     <div className="carousel-item active" style={{height:'600px' , margin:'0', borderSpacing:'0'}}>
     {/* <div className="container h-100" /> */}
         {/* <div className="row h-100 align-items-end" /> */}
         <img  src={require("../../img/bg-img/about2.jpg")} alt="First slide"/>
     </div>
     
     
     <div className="carousel-item" style={{height:'600px'}}>
         <img  src={require("../../img/bg-img/2.jpg")} alt="Second slide"/>
     </div>
     
     
     <div className="carousel-item" style={{height:'600px'}} >
         <img  src={require("../../img/bg-img/3.jpeg")} alt="Third slide"/>
     </div>
     
       
     <div className="carousel-item" style={{height:'600px'}} >
         <img  src={require("../../img/bg-img/p3.png")} alt="Third slide"/>
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
          <h1 className='large text' style={{color:''}}>Sites</h1>
          <p className='lead'>
            <i className='fab fa-connectdevelop' /> Check out beautiful sites
            all over the world
          </p>
          <div className='profiles'>
            {sites.length > 0 ? (
              sites.map(site => <SiteItem key={site._id} site={site} />)
            ) : (
              <h4>No sites found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  )
}

Sites.propTypes = {
  getSites: PropTypes.func.isRequired,
  site: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  site: state.site
})

export default connect(mapStateToProps, { getSites })(Sites)
