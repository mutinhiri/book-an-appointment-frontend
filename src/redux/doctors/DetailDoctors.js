const FETCH_DETAIL_DOCTORS = 'book-an-appointment-frontend/doctors/FETCH_DETAIL_DOCTORS';

export const fetchDetailDoctors = (payload) => ({
  type: FETCH_DETAIL_DOCTORS,
  payload,
});

const initialState = {
  doctors: [],
  loading: false,
  error: null,
};

const doctorsDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DETAIL_DOCTORS:
      return { ...state, doctors: action.payload };
    default:
      return state;
  }
};

export default doctorsDetailReducer;
