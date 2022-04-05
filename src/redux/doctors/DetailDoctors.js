const FETCH_DETAIL_DOCTORS = 'book-an-appointment-frontend/motors/FETCH_DETAIL_MOTORS';

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
    case FETCH_DETAIL_MOTORS:
      return { ...state, doctors: action.payload };
    default:
      return state;
  }
};

export default doctorsDetailReducer;