import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addSite } from '../../actions/site'
import { setAlert } from '../../actions/alert'

const SiteForm = ({ setAlert, addSite }) => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    description: ''
  })

  const { name, image, description } = formData

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault()
    if (name == null || image == null || description == null) {
      setAlert('Fill in all!', 'danger')
    } else {
      addSite({ name, image, description })
    }
  }

  return (
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
    <div className='post-form'>
      <div className='bg p' style={{backgroundColor:'lightblue'}}>
        <h3>Add a Site here...</h3>
      </div>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Site name'
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
            placeholder='Image src here'
            name='image'
            value={image}
            className='form-control'
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Description here'
            name='description'
            value={description}
            className='form-control'
            onChange={e => onChange(e)}
            minLength='10'
          />
        </div>
        <input type='submit' className='btn sonar-btn my-1' value='Submit' />
      </form>
    </div>
    </div>
    </section>
  </div>
  )
}

SiteForm.propTypes = {
  addSite: PropTypes.func.isRequired
}

export default connect(null, { setAlert, addSite })(SiteForm)
