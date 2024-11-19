// src/redux/sessionActions.js
export const setSession = (session) => {
    return {
      type: 'SET_SESSION',
      payload: session,
    };
  };
  
  export const clearSession = () => {
    return {
      type: 'CLEAR_SESSION',
    };
  };
  