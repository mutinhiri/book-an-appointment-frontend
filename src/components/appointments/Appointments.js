/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import appointmentAPI from '../../api/appointmentAPI';

const Appointment = () => {
  const dispatch = useDispatch();
  const appointments = useSelector((state) => state.appointments.appointments) || [];

  useEffect(() => {
    dispatch(appointmentAPI());
  }, []);

  return (
    <div className="appointment-page">
      {appointments.length > 0 && (
        <div className="d-flex flex-column justify-content-center">
          <h2 className="text-center text-white">Appointments</h2>
          <div className=" w-100 d-flex flex-column justify-content-center align-items-center">
            <table className="table table-striped w-50">
              <thead>
                <tr>
                  <th scope="col">S/N</th>
                  <th scope="col">Name</th>
                  <th scope="col">Location</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{appointment[1].doctor}</td>
                    <td>{appointment[0].city}</td>
                    <td>{appointment[0].dateOfAppointment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {appointments.length === 0 && (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h2 className="text-center text-white">No appointment found!</h2>
        </div>
      )}
    </div>
  );
};

export default Appointment;
