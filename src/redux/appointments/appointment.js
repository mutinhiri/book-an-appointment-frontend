const FETCH_APPOINTMENTS = 'FETCH_APPOINTMENTS';

export const getAppointments = (payload) => ({
  type: FETCH_APPOINTMENTS,
  payload,
});

const initialstate = {
  appointments: [],
  loading: false,
  error: null,
};

const appointmentReducer = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_APPOINTMENTS:
      return { ...state, appointments: action.payload };
    default:
      return state;
  }
};

export default appointmentReducer;
