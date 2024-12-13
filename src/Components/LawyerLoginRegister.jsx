import React from 'react';
import { Box, Button, Container, TextField, Typography, Dialog, DialogActions, DialogContent, DialogTitle, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';


const RegisterStyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  position: 'absolute',
  left: '5%',
  top: '50%',
  transform: 'translateY(-50%)',
  height: '70%', 
  [theme.breakpoints.down('sm')]: {
    width: '90%',
    left: '5%',
  },
  [theme.breakpoints.up('md')]: {
    width: '30%',
  },
  [theme.breakpoints.up('lg')]: {
    width: '25%',
  },
}));


function LawyerLoginRegister({ title }) {
  const [otpOpen, setOtpOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    try {
      console.log(data);
      const response = await axios.post('/api/register-lawyer', data);
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
    navigate('/lawyer-login');
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
     <RegisterStyledContainer maxWidth="xs">
      <Box mt={5}>
        <Typography variant="h5" gutterBottom>{title}</Typography>
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
            name="barCouncilId"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField fullWidth label="Bar Council ID" margin="normal" {...field} />
            )}
          />
          <Controller
            name="experience"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField fullWidth label="Experience" margin="normal" {...field} />
            )}
          />
          <Controller
            name="specialization"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField fullWidth label="Specilization" margin="normal" {...field} />
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
              <TextField
                fullWidth
                label="Confirm Password"
                type={showPassword ? 'text' : 'password'}
                margin="normal"
                {...field}
              />
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
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOtpClose} color="primary">Submit</Button>
        </DialogActions>
      </Dialog>
    </RegisterStyledContainer>
  );
}

export default LawyerLoginRegister;