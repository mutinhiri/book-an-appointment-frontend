import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from "react-redux";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";

const DetailPage = () => {
  const doctor = useSelector((state) => state.doctorsDetailReducer.doctors) || [];
  const navigate = useNavigate();
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col=md-8 col-12">
          <img className="w=100 h-100" src={doctor.image} alt={doctor.name} />
        </div>
      </div>
    </div>
  )
}