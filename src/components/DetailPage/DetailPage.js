import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { BsFillArrowRightCircleFill, BsFillGearFill } from 'react-icons/bs';
import './Detail.css';

const DetailPage = () => {
  const doctor = useSelector((state) => state.doctorsDetailReducer.doctors) || [];
  const navigate = useNavigate();
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col=md-8 col-12">
          <img className="w=100 h-100" src={doctor.image} alt={doctor.name} />
        </div>
        <div className="col-md-3 col-12">
          <div className="text-md-end">
            <h1>{doctor.name}</h1>
            <p>{doctor.bio}</p>
          </div>
          <table className="table table-stripped">
            <tbody>
              <tr>
                <td>Area of specialiity</td>
                <td>{doctor.specialty}</td>
              </tr>
              <tr>
                <td>Experience years</td>
                <td>{doctor.experience}</td>
              </tr>
              <tr>
                <td>Availability</td>
                <td>Yes</td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex justify-content-end">
            <div className="resorve p-s">
              <BsFillGearFill className="mx-2" size={25} color="white" />
              <button className="btn btn-primary bg-transparent borderless" type="submit" onClick={() => { navigate('/appointment', { state: { id: doctor.id } }); }}>Appointment</button>
              <BsFillArrowRightCircleFill className="mx-2" size={25} color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
