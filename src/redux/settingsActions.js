import axios from 'axios';

// Action Types
export const FETCH_SETTINGS_SUCCESS = 'FETCH_SETTINGS_SUCCESS';
export const UPDATE_SETTINGS_SUCCESS = 'UPDATE_SETTINGS_SUCCESS';

// Action Creators
export const fetchSettings = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/settings');
    dispatch({ type: FETCH_SETTINGS_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Error fetching settings:', error);
  }
};

export const updateSettings = (settings) => async (dispatch) => {
  try {
    const response = await axios.post('/api/settings', settings);
    dispatch({ type: UPDATE_SETTINGS_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Error updating settings:', error);
  }
};
