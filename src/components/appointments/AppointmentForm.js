import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import AddAppointmentAPI from '../../api/addAppointmentAPI';

const AppointmentForm = () => {
  const doctors = useSelector((state) => state.doctors.doctors) || [];
  const location = useLocation();
  const [selectLocation, setSelectLocation] = useState('MaryLand');
  const [selectDateOfAppointment, onChange] = useState(new Date());
  const [loginResponse, setLoginResponse] = useState('');

  const getDoctorId = () => {
    if (location.state) {
      return location.state.id;
    }
    if (doctors[0]) {
      return doctors[0].id;
    }
    return 1;
  };

  const [doctorId, setDoctorId] = useState(getDoctorId());
  const user = useSelector((state) => state.userReducer.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.id) {
      setLoginResponse('Login to continue');
    } else if (selectDateOfAppointment < new Date() || selectDateOfAppointment === new Date()) {
      setLoginResponse('Date should be greater than today');
    } else {
      const response = await AddAppointmentAPI({
        Location: selectLocation,
        dateOfAppointment: selectDateOfAppointment,
        user_id: user.id,
        doctor_id: parseInt(doctorId, 10),
      });
      if (!response.error) {
        setLoginResponse('Appointment was successfully created');
      } else {
        setLoginResponse(response.error);
      }
    }
  };
};

export default AppointmentForm;
