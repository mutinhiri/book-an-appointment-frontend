import axios from "axios";
import { fetchDoctors } from "../redux/doctors/doctors";
import { fetchDetailDoctors } from "../redux/doctors/DetailDoctors";
import { addItem } from "../redux/doctors/AddItem";
import { removeItem } from "../redux/doctors/DeleteList";
import BaseUrl from "./BaseURL";

export const getDoctors = async (dispatch) => {
  const response = await axios.get(`${BaseUrl}doctors`);
  dispatch(fetchDoctors(response.data));
};

export const getDoctorsDetail = (id) => async (dispatch) => {
  fetch(`${BaseUrl}doctors/${id}`)
    .then((res) => res.json())
    .then((resResponse) => dispatch(fetchDetailDoctors(resResponse)));
}
export const AddItemHandler = async (dispatch, data) => {
  const formData = new FormData();
  formData.append('name', data.name);
  formData.append('image', data.image);
  formData.append('speciality', data.speciality);
  formData.append('bio', data.bio);
  formData.append('experience', data.experience);
  try {
    const response = await axios.post(`${BaseUrl}doctors/create`, formData)
    dispatch(addItem(response.data));
    return response;
  }
    catch (err) {
      return err.response 
  }
};