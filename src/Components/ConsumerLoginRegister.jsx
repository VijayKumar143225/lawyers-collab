import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


function ConsumerLoginRegister() {
  const [otpOpen, setOtpOpen] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm();

  const handleRegister = async (data) => {
    try {
      const response = await axios.post('/api/register-consumer', data);
      if (response.data.success) {
        setOtpOpen(true);
      } else if (response.data.error) {
        alert(`Registration failed: ${response.data.error}`);
      } else {
        alert('Registration failed: Unknown error');
      }
    } catch (error) {
      if (error.response) {
        alert(`Registration failed: ${error.response.data.message}`);
      } else if (error.request) {
        alert('Registration failed: No response from server. Please check your network connection.');
      } else {
        alert(`Registration failed: ${error.message}`);
      }
      console.error('Registration error:', error);
    }
  };

  const handleOtpClose = () => {
    setOtpOpen(false);
    navigate('/consumer-login');
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Container maxWidth="xs" style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px' }}>
      <Box mt={5}>
        <Typography variant="h5" gutterBottom>Consumer Register Page</Typography>
        <form onSubmit={handleSubmit(handleRegister)}>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField fullWidth label="First Name" margin="normal" {...field} />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField fullWidth label="Last Name" margin="normal" {...field} />
            )}
          />
          <Controller
            name="mobileNumber"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField fullWidth label="Mobile Number" margin="normal" {...field} />
            )}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField fullWidth label="Email ID" margin="normal" {...field} />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                fullWidth
                label="Password"
                type={showPassword ? 'text' : 'password'}
                margin="normal"
                {...field}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={toggleShowPassword}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField fullWidth label="Confirm Password" type={showPassword ? 'text' : 'password'} margin="normal" {...field} />
            )}
          />
          <Box mt={2}>
            <Button variant="contained" color="primary" fullWidth type="submit" style={{ backgroundColor: '#007bff', borderRadius: '8px' }}>Register</Button>
          </Box>
        </form>
      </Box>
      <Dialog open={otpOpen} onClose={handleOtpClose}>
        <DialogTitle>Enter OTP</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="OTP"
            margin="normal"
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOtpClose} color="primary">Submit</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default ConsumerLoginRegister;