import React, { useState } from 'react';
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
  const user = useSelector((state) => state.UserReducer.user);

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
  const options = [
    'maryLand',
    'Madrid',
    'Sydney',
    'New York',
    'Dubia',
    'Barcelona',
  ];

  return (
    <div className="appointmentform-page">
      <form className="d-flex flex-column h-100 justify-content-center align-items-center" onSubmit={handleSubmit}>
        <section>
          <span>
            {' '}
            {loginResponse}
          </span>
          <div className="d-flex flex-column justify-content-center text-white">
            <h2 className="text-center">Create Appointment with A Doctor</h2>
            <p className="text-center">
              Choose from the available locations and the preferred time.
            </p>
          </div>
          <div className="d-flex">
            <select className="form-select me-2 rounded-pill " onChange={(e) => setSelectLocation(e.target.value)} value={selectLocation}>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <select className="form-select me-2 rounded-pill" onChange={(e) => setDoctorId(e.target.value)} value={doctorId}>
              {doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.name}
                </option>
              ))}
            </select>
          </div>
          <div className="d-flex justify-content-center w-100 mt-3">
            <DatePicker className="w-50 me-2 rounded-pill form-control" onChange={onChange} value={selectDateOfAppointment} />
          </div>
          <div className="d-flex w-100 justify-content-center pt-5">
            <button className="btn btn-outline-success rounded-pill" type="submit">Submit</button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default AppointmentForm;
