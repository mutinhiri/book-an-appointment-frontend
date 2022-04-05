import axios from 'axios';
import BaseUrl from './BaseURL';

const AddAppointmentAPI = async (data) => {
  try {
    const response = await axios.post(`${BaseUrl}appointments`, data);
    return { status: response.status, doctor: response.data };
  } catch (error) {
    return { status: error.response.status, ...error.response.data };
  }
};

export default AddAppointmentAPI;
