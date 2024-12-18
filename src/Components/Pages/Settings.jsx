import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, TextField, Button, Switch, FormControlLabel } from '@mui/material';
import { fetchSettings, updateSettings } from '../../redux/settingsActions';
import { styled } from '@mui/system';

const SettingsContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  }));
  
const Settings = () => {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);

  const [localSettings, setLocalSettings] = useState({
    theme: settings.theme,
    notifications: settings.notifications,
  });

  useEffect(() => {
    dispatch(fetchSettings());
  }, [dispatch]);

  useEffect(() => {
    setLocalSettings(settings);
  }, [settings]);

  const handleSave = () => {
    dispatch(updateSettings(localSettings));
    alert('Settings updated successfully!');
  };

  return (
    <SettingsContainer>
      <Typography variant="h5" gutterBottom>
        Settings
      </Typography>
      <TextField
        fullWidth
        label="Theme"
        value={localSettings.theme}
        onChange={(e) => setLocalSettings({ ...localSettings, theme: e.target.value })}
        margin="normal"
      />
      <FormControlLabel
        control={
          <Switch
            checked={localSettings.notifications}
            onChange={(e) => setLocalSettings({ ...localSettings, notifications: e.target.checked })}
          />
        }
        label="Enable Notifications"
      />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
      </SettingsContainer>
  );
};

export default Settings;
