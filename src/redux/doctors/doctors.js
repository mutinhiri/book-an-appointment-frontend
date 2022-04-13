const FETCH_DOCTORS = 'book-an-appointment-frontend/doctors/FETCH_DOCTORS';
const DELETE_ONE_DOCTOR = 'book-an-appointment-frontend/doctors/DELETE_ONE_DOCTOR';

export const fetchDoctors = (payload) => ({
  type: FETCH_DOCTORS,
  payload,
});

export const deleteOneDoctor = (payload) => ({
  type: DELETE_ONE_DOCTOR,
  payload,
});

const initialState = {
  doctors: [],
  loading: false,
  error: null,
};

const doctorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DOCTORS:
      return { ...state, doctors: action.payload };
    case DELETE_ONE_DOCTOR:
      return { ...state, doctors: state.doctors.filter((doctor) => doctor.id !== action.payload) };
    default:
      return state;
  }
};

export default doctorsReducer;
