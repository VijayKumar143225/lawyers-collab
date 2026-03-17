import { FETCH_SETTINGS_SUCCESS, UPDATE_SETTINGS_SUCCESS } from './settingsActions';

const initialState = {
  theme: 'light',
  notifications: false,
};

export const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SETTINGS_SUCCESS:
      return { ...state, ...action.payload };
    case UPDATE_SETTINGS_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
