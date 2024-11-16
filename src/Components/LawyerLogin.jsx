import { Box, Button, Checkbox, Container, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function LawyerLogin({ title }) {
  const [otpOpen, setOtpOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    setOtpOpen(true);
    // Dummy login handler
    alert('Login successful!');
    navigate('/');
  };

  const handleOtpClose = () => {
    setOtpOpen(false);
    navigate(title === 'Lawyer Login' ? '/lawyer-login' : '/consumer-login');
  };

  return (
    <Container maxWidth="xs" style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px' }}>
      <Box mt={5}>
        <Typography variant="h5" gutterBottom>{title}</Typography>
        <TextField fullWidth label="Username/Email" margin="normal" />
        <TextField fullWidth label="Password" type="password" margin="normal" />
        <FormControlLabel control={<Checkbox />} label="Remember Me" />
        <Box mt={2}>
          <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>Login</Button>
        </Box>
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
          <TextField fullWidth label="OTP" margin="normal" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOtpClose} color="primary">Submit</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default LawyerLogin;