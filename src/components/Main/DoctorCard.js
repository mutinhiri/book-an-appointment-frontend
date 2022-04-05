import { BsTwitter, BsVimeo } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import PropTypes from 'prop-types';

const DoctorCard = ({ doctor, onClick }) => {
  const {
    name, image, speciality,
  } = doctor;
  return (
    <button type="button" className="bg-transparent bordeless" onClick={() => { onClick(); }}>
      <div className="card borderless">
        <div className="card-image">
          <img src={image} alt={name} className="doctor-card-image" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text text-muted">random description here</p>
          <p className="card-text text-muted">{speciality}</p>
          <div className="rounded-circle border border-muted border-2 card-icon-circle justify-content-center align-items-center d-flex mx-1 text-muted">
            <FaFacebookF />
            <BsTwitter />
            <BsVimeo />

          </div>
        </div>
      </div>
    </button>
  );
};

DoctorCard.PropTypes = {
  doctor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    speciality: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DoctorCard;
