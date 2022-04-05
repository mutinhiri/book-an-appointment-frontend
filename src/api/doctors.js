import axios from "axios";
import { fetchDoctors } from "../redux/doctors/doctors";
import { fetchDetailDoctors } from "../redux/doctors/DetailDoctors";
import { addItem } from "../redux/doctors/AddItem";
import { removeItem } from "../redux/doctors/DeleteList";
import BaseUrl from "./BaseURL";

export const getDoctors = async (dispatch) => {
  const response = await axios.get(`${BaseUrl}doctors`);
  dispatch(fetchDoctors(response.data));
}