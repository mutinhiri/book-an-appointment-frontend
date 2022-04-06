import { useDispatch, useSelector } from "react-redux";
import { BsCaretRightFill } from "react-icons/bs";
import { BsFillCaretLeftFill } from "react-icons/bs";
import Swiper from "swiper/react";
import { SwiperSlide } from "swiper/react";
import './Main.css'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DoctorCard from "./DoctorCard";
import { getDoctorsDetail } from "../../api/doctors";
import 'swiper/css'

const Main = () => {
  const doctors = useSelector((state) => state.doctors.doctors) || [];
  const dispatch = useDispatch();
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth)
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions)
  }, [doctors])

  const navigate = useNavigate();

  const GoToDetailPage = (id) => {
    dispatch(getDoctorsDetail(id)).then(() => {
      navigate(`/Detail/${id}`);
    });
  };

  return (
    <div>
      <h1 className="fw-bolder text-center">AVAILABLE DOCTORS</h1>
      <p className="text-muted text-center main-screen-subtitle">Please select doctor specialist</p>
      
    </div>
  )
}