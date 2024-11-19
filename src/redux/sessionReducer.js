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
      case 'CLEAR_SESSION':
        return {
          ...state,
          session: null,
        };
      default:
        return state;
    }
  };
  
  export default sessionReducer;
  