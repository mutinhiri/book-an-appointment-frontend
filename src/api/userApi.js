import axios from 'axios';
import BaseUrl from './BaseURL';

const UserApi = async (user) => {
  try {
    const response = await axios.post(`${BaseUrl}users`, user);
    return { status: response.status, user: response.data };
  } catch (error) {
    return { status: error.response.status, ...error.response.data };
  }
};

export default UserApi;
