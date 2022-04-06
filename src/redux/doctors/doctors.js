const FETCH_DOCTORS = 'book-an-appointment-frontend/doctors/FETCH_DOCTORS';
const DELETE_DOCTOR = 'book-an-appointment-frontend/doctors/DELETE_DOCTOR';

export const fetchDoctors = (payload) => ({
  type: FETCH_DOCTORS,
  payload,
});

export const deleteDoctor = (payload) => ({
  type: DELETE_DOCTOR,
  payload,
});

const initialstate = {
  doctors: [],
  loading: false,
  error: null,
};

const doctorsReducer = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_DOCTORS:
      return { ...state, doctors: action.payload };
    case DELETE_DOCTOR:
      return { ...state, doctors: state.doctors.filter((doctor) => doctor.id !== action.payload) };
    default:
      return state;
  }
};

export default doctorsReducer;
