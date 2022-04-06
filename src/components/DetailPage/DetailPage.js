import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from "react-redux";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";

const DetailPage = () => {
  const doctor = useSelector((state) => state.doctorsDetailReducer.doctors) || [];
}