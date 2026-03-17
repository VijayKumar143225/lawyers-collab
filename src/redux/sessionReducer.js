// src/redux/sessionReducer.js
const initialState = {
  session: null,
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SESSION':
      return {
        ...state,
        session: action.payload,
      };
    default:
      return state;
  }
};

export default sessionReducer;
  