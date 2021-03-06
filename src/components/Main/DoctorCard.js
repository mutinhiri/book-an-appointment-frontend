import { BsTwitter, BsVimeo } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import PropTypes from 'prop-types';

const DoctorCard = ({ doctor, onClick }) => {
  const {
    name, image, bio,
  } = doctor;
  return (
    <button type="button" className="bg-transparent borderless" onClick={() => { onClick(); }}>
      <div className="card">
        <div className="">
          <img src={image} alt="doctorimage" className="card-img-top doctor-card-image" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text text-muted">{bio}</p>
          <div className="card-text d-flex justify-content-center">
            <div className="rounded-circle border border-muted border-2 card-icon-circle justify-content-center align-items-center d-flex mx-1 text-muted">
              <FaFacebookF />
            </div>
            <div className="rounded-circle border border-muted border-2 card-icon-circle justify-content-center align-items-center d-flex mx-1 text-muted">
              <BsTwitter />
            </div>
            <div className="rounded-circle border border-muted border-2 card-icon-circle justify-content-center align-items-center d-flex mx-1 text-muted">
              <BsVimeo />
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

DoctorCard.propTypes = {
  doctor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DoctorCard;
