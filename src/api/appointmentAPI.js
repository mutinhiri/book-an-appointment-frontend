import axios from 'axios';
import { getAppointments } from '../redux/appointments/appointment';
import BaseUrl from './BaseURL';

const appointmentAPI = () => async (dispatch) => {
  const response = await axios.get(`${BaseUrl}appointments`);
  dispatch(getAppointments(response.data));
};

export default appointmentAPI;