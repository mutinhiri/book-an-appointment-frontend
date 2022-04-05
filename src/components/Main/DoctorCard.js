import {BsTwitter, BsVimeo } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import PropTypes from 'prop-types'

const DoctorCard = ({doctor, onClick }) => {
  const {
    name, image, speciality,
  } = doctor;
  return (
    <button type ="button" className='bg-transparent bordeless' onClick= {() => { onClick(); }}>
      <div className='card borderless'>
        <div className='card-image'>
          <img src={image} alt={name} className="doctor-card-image" />
        </div>
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <p
        </div>
      </div>
    </button>
  )
}