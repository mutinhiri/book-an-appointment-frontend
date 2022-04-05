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
        <div className="appointment">
          <h2>Appointments</h2>
          <div className="appointment-table">
            <table>
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{appointment[1].doctor}</td>
                    <td>{appointment[0].location}</td>
                    <td>{appointment[0].dateOfAppointment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {appointments.length === 0 && (
        <div>
          <h2>No appointment found!</h2>
        </div>
      )}
    </div>
  );
};

export default Appointment;
