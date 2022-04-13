const GET_USER_SUCCESS = 'book-an-appointment-frontend/users/GET_USER_SUCCESS';

export const getUser = (payload) => ({
  type: GET_USER_SUCCESS,
  payload,
});

const initialState = {
  user: {},
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default UserReducer;
