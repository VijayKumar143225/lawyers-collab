import { Box, Button, Checkbox, Container, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, TextField, Typography, InputAdornment, IconButton } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setSession } from "../redux/sessionActions";
import { useForm,Controller  } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function LawyerLogin({ title }) {
  const [otpOpen, setOtpOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm();

  const handleLogin = async (data) => {
    try {
      const response = await axios.post('/api/login', data);
      if (response.data.success) {
        dispatch(setSession(response.data.session));
        setOtpOpen(true);
      } else if (response.data.error) {
        alert(`Login failed: ${response.data.error}`);
      } else {
        alert('Login failed: Unknown error');
      }
    } catch (error) {
      if (error.response) {
        alert(`Login failed: ${error.response.data.message}`);
      } else if (error.request) {
        alert('Login failed: No response from server. Please check your network connection.');
      } else {
        alert(`Login failed: ${error.message}`);
      }
      console.error('Login error:', error);
    }
  };

  const handleOtpClose = () => {
    setOtpOpen(false);
    navigate(title === 'Lawyer Login' ? '/lawyer-login' : '/consumer-login');
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };


  return (
    <Container maxWidth="xs" style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px' }}>
      <Box mt={5}>
        <Typography variant="h5" gutterBottom>{title}</Typography>
        <form onSubmit={handleSubmit(handleLogin)}>
          <Controller
            name="username"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField fullWidth label="Username/Email" margin="normal" {...field} />
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
          
          <FormControlLabel control={<Checkbox />} label="Remember Me" />
          <Box mt={2}>
            <Button variant="contained" color="primary" fullWidth type="submit" style={{ backgroundColor: '#007bff', borderRadius: '8px' }}>Login</Button>
          </Box>
        </form>
        <Box mt={2} textAlign="center">
          <Button color="secondary">Forgot Password</Button>
          <Typography>
            Didn't have an account?&nbsp;
            {title === 'Lawyer Login' ? (
              <Link to="/lawyer-register">Register</Link>
            ) : (
              <Link to="/consumer-register">Register</Link>
            )}
          </Typography>
        </Box>
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

export default LawyerLogin;