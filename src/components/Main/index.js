import { useDispatch, useSelector } from 'react-redux';
import { BsCaretRightFill, BsFillCaretLeftFill } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Main.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DoctorCard from './DoctorCard';
import { getDoctorsDetail } from '../../api/doctors';
import 'swiper/css';

const Main = () => {
  const doctors = useSelector((state) => state.doctors.doctors) || [];
  const dispatch = useDispatch();
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, [doctors]);

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
      <div className="row">
        <Swiper spaceBetween={0} slidesPerView={width > 768 ? 3 : 1}>
          {doctors.map((doctor) => (
            <SwiperSlide key={doctor.id}>
              <div className="d-flex justify-content-center">
                <DoctorCard doctor={doctor} onClick={() => { GoToDetailPage(doctor.id); }} />
              </div>
            </SwiperSlide>
          ))}
          ...
        </Swiper>
      </div>
      <div className="d-sm-block d-none">
        <button
          type="button"
          className="borderless bg-transparent"
          onClick={() => {
            const { swiper } = document.querySelector('.swiper');
            swiper.slidePrev();
          }}
        >
          <div className="main-page-handle-left d-flex justify-content-center align-items-center">
            <BsFillCaretLeftFill />
          </div>
        </button>
        <button
          type="button"
          className="borderless bg-transparent"
          onClick={() => {
            const { swiper } = document.querySelector('.swiper');
            swiper.slideNext();
          }}
        >
          <div className="main-page-handle-right d-flex justify-content-center align-items-center">
            <BsCaretRightFill />
          </div>

        </button>

      </div>
    </div>
  );
};

export default Main;
